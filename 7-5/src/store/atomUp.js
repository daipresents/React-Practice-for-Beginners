import { atom, atomFamily, selector } from 'recoil';

// IDを管理するAtom
export const idsAtom = atom({
  key: 'idsAtom',
  default: []
});

// 個々のTODOを管理するAtom
export const todoAtom = atomFamily({
  key: 'todoAtom',
  default: null
});

// Todo項目をリストとして束ね、操作するためのセレクタ
export const todoListSelector = selector({
  key: 'todoListSelector',

  // 現在のTODOリストを取得
  get: ({ get }) => {
    const ids = get(idsAtom);
    return ids.map(id => get(todoAtom(id)));
  },

  // TODOリストへの追加・完了済み・削除操作
  set: ({ set, reset }, { type, id, newItem }) => {

    switch (type) {
      // 新規作成
      case 'add':
        set(todoAtom(newItem.id), newItem);
        set(idsAtom, ids => [...ids, newItem.id]);
        break;

      // 完了
      case 'done':
        set(todoAtom(id), todo => ({ ...todo, isDone: true }));
        break;

      // 削除
      case 'remove':
        reset(todoAtom(id));
        set(idsAtom, ids => ids.filter(e => e !== id));
        break;

      default:
        throw new Error('Type is invalid.');
    }
  }
});
