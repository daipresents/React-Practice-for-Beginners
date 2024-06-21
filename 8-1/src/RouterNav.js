import { NavLink, Outlet } from 'react-router-dom';
import './RouterNav.css';

// 適用すべきスタイルクラスを変更する（className属性）
const isCurrent = ({ isActive, isPending }) => isActive ? 'active' : '';

// style属性（JSの中にStyleが入ってしまうのであまりおすすめされない）
const isCurrent2 = ({ isActive }) => isActive ? {
  color: 'Red',
  fontWeight: 'bold'
} : {};

export default function RouterNav() {
  return (
    <>
      <ul>
        {/* そのままだと .activeスタイルクラスを付与する */}
        <li><NavLink to="/">トップ</NavLink></li>
        {/* className属性も使える */}
        <li><NavLink className={isCurrent} to="/article">公開記事</NavLink></li>
        {/* style属性 */}
        <li><NavLink style={isCurrent2} to="/about">このサイトについて</NavLink></li>

        <li><NavLink to="/book">book</NavLink></li>
        <li><NavLink to="/book/1234">book/1234</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}
