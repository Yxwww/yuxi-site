import { ScriptHTMLAttributes, useEffect, useState } from 'react';
import { noop } from 'yuxi-utils';
// utteranc related attributes
interface UtterancOptions {
  repo?: string;
  'issue-term'?: string;
  theme?: string;
}
export type UseScriptsAttributes = ScriptHTMLAttributes<unknown> & {
  async: boolean;
} & UtterancOptions;
/**
 * Append script to the dom. This approach ensures the script tag is appended to the target element.
 * next/script doesn not provide the location of the script tag.
 * react does not support script tag rendering
 */
export default function useScript(
  el: HTMLElement | null,
  attributes: UseScriptsAttributes
) {
  const { src } = attributes;
  const [status, setStatus] = useState(src ? 'loading' : 'idle');
  function setAttributeStatus(event) {
    setStatus(event.type === 'load' ? 'ready' : 'error');
  }
  useEffect(() => {
    if (el) {
      const scriptEl = document.createElement('script');
      if (attributes.async) {
        scriptEl.async = attributes.async;
      }
      for (const key in attributes) {
        scriptEl.setAttribute(key, attributes[key]);
      }
      el.appendChild(scriptEl);
      return () => {
        scriptEl.removeEventListener('load', setAttributeStatus);
        scriptEl.removeEventListener('error', setAttributeStatus);
        scriptEl.remove();

        const utterancEl = el.querySelector('.utterances');
        if (utterancEl) {
          utterancEl.remove();
        }
      };
    } else {
      // elemnt is not available
      return noop;
    }
  }, [el, attributes]);

  return [status];
}
