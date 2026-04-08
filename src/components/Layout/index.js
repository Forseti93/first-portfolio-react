import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags top-tag-html">
          &lt;html&gt; 2022 year
          <br />
          <span>&lt;body&gt;</span>
        </span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}
