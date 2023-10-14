import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Neo-Feral Markets" },
    { name: "description", content: "neo-feral stock ticker app" },
  ];
};

export default function Index() {
  return (
    <div className="main-content">
      <div className="nav-header">
        <p className="nav-header-title">NEO-FERAL MARKETS</p>
        <ul className="nav-header-navbar">
          <li className="nav-header-navbar--link">stocks</li>
          <li className="nav-header-navbar--link">crypto</li>
          <li className="nav-header-navbar--link">forex</li>
          <li className="nav-header-navbar--link">indices</li>
          <li className="nav-header-navbar--link">futures</li>
          <li className="nav-header-navbar--link">bonds</li>
        </ul>
      </div>

      <div className="filters">
        <ul className="filters-duration">
          <li className="filters-duration--link">1D</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">5D</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">1M</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">6M</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">YTD</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">1Y</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">5Y</li>
          <span className="separator">|</span>
          <li className="filters-duration--link">MAX</li>
        </ul>
        <label className="filter-searchbox">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="css-i6dzq1"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input placeholder="SEARCH" type="search" />
        </label>
      </div>
    </div>
  );
}
