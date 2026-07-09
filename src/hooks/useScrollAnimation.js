import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation - Intersection Observer hook for scroll-triggered reveal animations
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @param {boolean} options.once - Whether to animate only once
 * @returns {React.RefObject} - Ref to attach to the element
 */
export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useScrollAnimationList - Observer for multiple child elements with stagger
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.stagger - Delay between items in ms
 * @returns {React.RefObject} - Ref to attach to the parent container
 */
export function useScrollAnimationList({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  stagger = 100,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      children.forEach((child) => child.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = children.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * stagger}ms`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    children.forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, stagger]);

  return ref;
}