interface ListItem {
  id: string;
  content: string;
}
interface AppState {
  input: string;
  listData: ListItem[];
}

/**
 * lightweight state management tool provides, update & reset capability
 */
function createStateControl<T>(init: T) {
  const reset = () => {
    state = { ...init };
  };

  let state;
  reset();
  return {
    getState() {
      return state;
    },
    update(u: Partial<T>) {
      state = Object.assign(state, u);
    },
    reset,
  };
}

export function createApp(el: HTMLElement) {
  const base: HTMLElement = el;

  let input: HTMLInputElement | undefined;
  let table: HTMLUListElement | undefined;

  const state = createStateControl({
    input: '',
    listData: [],
  } as AppState);

  function onInputChanged(event: Event) {
    // console.log('input changed', event.target);
  }

  return {
    init() {
      input = document.createElement('input');
      input.addEventListener('change', onInputChanged); // avoid having to useCallback onInputChanged
      table = document.createElement('ul');

      base.appendChild(input);
      base.appendChild(table);
    },
    renderData(arrData: ListItem[]) {
      if (!table) return;
      for (let i = 0; i < arrData.length; i++) {
        const item = arrData[i];
        const li = document.createElement('li');
        li.id = item.id;
        li.textContent = item.content;
        table.append(li);
      }
    },

    updateListItem(id: string, value: string) {},
    destroy() {
      input.removeEventListener('change', onInputChanged);
      base.removeChild(input);
      base.remove();

      input = undefined;
      table = undefined;
      state.reset();
    },
  };
}
