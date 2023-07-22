import { Page } from '@/components/layouts/main';
import { useState } from 'react';

function ColorPicker({ onChange, value }) {
  return (
    <div>
      <label htmlFor="colorPicker">Fancy Color Picker: </label>
      <input
        id="colorPicker"
        type="color"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default function ColorChanger() {
  const [color, setColor] = useState('#000000');
  return (
    <Page>
      <div className="h-full flex flex-col">
        <div
          className="h-[200px] w-[200px] mb-8"
          style={{ backgroundColor: color }}
        ></div>

        <ColorPicker
          value={color}
          onChange={(c) => {
            setColor(c);
          }}
        />
      </div>
    </Page>
  );
}
