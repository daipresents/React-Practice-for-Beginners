import Image from 'next/image';

export default function BookDetails({ index, book }) {
  return (
    <div className="flex w-full mb-4">
      <div>
        {/*
          Imageタグ
            widthとheightが必須なのでレイアウトシフト対応
            遅延ロード対応
            画像キャッシュ
        */}
        <Image src={book.image} alt="" width={140} height={180} />
      </div>
      <div>
        <ul className="list-none text-black ml-4">
          <li>{index && index + '.'}</li>
          <li>{book.title} ({book.price}円)</li>
          <li>{book.author}</li>
          <li>{book.publisher}刊</li>
          <li>{book.published} 発売</li>
        </ul>
      </div>
    </div>
  );
}
