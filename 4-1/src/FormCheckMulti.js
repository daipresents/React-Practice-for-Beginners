import { useState } from 'react';

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: []
  });

  const handleFormCheckMulti = e => {
    const fa = form.animal;

    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa
    });
  };

  const show = () => {
    console.log(`好きな動物： ${form.animal}`);
  };

  return (
    <form>
      <fieldset>
        <legend>好きな動物：</legend>
        <label htmlFor="animal_dog">イヌ</label>
        <input id="animal_dog" name="animal" type="checkbox" value="dog" checked={form.animal.includes('dog')} onChange={handleFormCheckMulti} /><br />

        <label htmlFor="animal_cat">ネコ</label>
        <input id="animal_cat" name="animal" type="checkbox" value="cat" checked={form.animal.includes('cat')} onChange={handleFormCheckMulti} /><br />

        <label htmlFor="animal_bird">トリ</label>
        <input id="animal_bird" name="animal" type="checkbox" value="bird" checked={form.animal.includes('bird')} onChange={handleFormCheckMulti} /><br />
      </fieldset>

      <button type="button" onClick={show}>送信</button>
    </form >
  );
}
