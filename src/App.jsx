import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Job from "./Job";
import Pages from "./Pages";
import Buttons from "./Buttons";
import Jobdesc from "./Jobdesc";

function App() {
  const [numberOfJobs, setNumberOfJobs] = useState(5);
  const [isFullTimeFilterActive, setIsFullTimeFilterActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterByLocation, setFilterByLocation] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");
  const [isJobDescriptionActive, setIsJobDescriptionActive] = useState(false);
  const [jobDescriptionId, setJobDescriptionId] = useState(0);

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };
  if (!isJobDescriptionActive) {
    return (
      <div className="App">
        <header className="header">
          <h1>
            Remote <span>Jobs</span>
          </h1>
          <section className="job-search">
            <div className="bg">
              <img
                src="/backgroundimg.png"
                alt="background"
                className="bg-image"
              />
              <div className="form-container">
                <form className="search-input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="work-bag-icon"
                  >
                    <path
                      d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 12H2"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 12V14"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 12V14"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="text"
                    className="input"
                    placeholder="Search by category/ company"
                    value={searchByCategory}
                    onChange={(e) => {
                      e.preventDefault();
                      setSearchByCategory(e.target.value);
                    }}
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </section>
        </header>
        <main className="job-list">
          <aside className="aside">
            <label className="full-time-btn">
              <input
                type="checkbox"
                onClick={() =>
                  setIsFullTimeFilterActive(!isFullTimeFilterActive)
                }
              ></input>
              <span className="full-time-label">Full time</span>
            </label>
            <p className="search-label">location</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="earth-icon"
              >
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM57.71 192.1L67.07 209.4C75.36 223.9 88.99 234.6 105.1 239.2L162.1 255.7C180.2 260.6 192 276.3 192 294.2V334.1C192 345.1 198.2 355.1 208 359.1C217.8 364.9 224 374.9 224 385.9V424.9C224 440.5 238.9 451.7 253.9 447.4C270.1 442.8 282.5 429.1 286.6 413.7L289.4 402.5C293.6 385.6 304.6 371.1 319.7 362.4L327.8 357.8C342.8 349.3 352 333.4 352 316.1V307.9C352 295.1 346.9 282.9 337.9 273.9L334.1 270.1C325.1 261.1 312.8 255.1 300.1 255.1H256.1C245.9 255.1 234.9 253.1 225.2 247.6L190.7 227.8C186.4 225.4 183.1 221.4 181.6 216.7C178.4 207.1 182.7 196.7 191.7 192.1L197.7 189.2C204.3 185.9 211.9 185.3 218.1 187.7L242.2 195.4C250.3 198.1 259.3 195 264.1 187.9C268.8 180.8 268.3 171.5 262.9 165L249.3 148.8C239.3 136.8 239.4 119.3 249.6 107.5L265.3 89.12C274.1 78.85 275.5 64.16 268.8 52.42L266.4 48.26C262.1 48.09 259.5 48 256 48C163.1 48 84.4 108.9 57.71 192.1L57.71 192.1zM437.6 154.5L412 164.8C396.3 171.1 388.2 188.5 393.5 204.6L410.4 255.3C413.9 265.7 422.4 273.6 433 276.3L462.2 283.5C463.4 274.5 464 265.3 464 256C464 219.2 454.4 184.6 437.6 154.5H437.6z" />
              </svg>
              <input
                type="text"
                placeholder="City, state, zip code or country"
                className="search-location"
                value={searchValue}
                onChange={searchInputHandler}
              />
            </form>
            <Buttons
              filterByLocation={filterByLocation}
              setFilterByLocation={setFilterByLocation}
            ></Buttons>
          </aside>
          <div className="job-container">
            <Job
              filterByLocation={filterByLocation}
              numberOfJobs={numberOfJobs}
              isFullTimeFilterActive={isFullTimeFilterActive}
              currentPage={currentPage}
              searchValue={searchValue}
              searchByCategory={searchByCategory}
              setIsJobDescriptionActive={setIsJobDescriptionActive}
              isJobDescriptionActive={isJobDescriptionActive}
              setJobDescriptionId={setJobDescriptionId}
            ></Job>
            <Pages
              setNumberOfJobs={setNumberOfJobs}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Pages>
          </div>
        </main>
        <footer className="footer">
          <p>
            Created by
            <a href="https://github.com/Jeremy-Polanco" className="username">
              &nbsp; Jeremy Polanco &nbsp;
            </a>
            - devChallenges.io
          </p>
        </footer>
      </div>
    );
  } else {
    return (
      <Jobdesc
        setIsJobDescriptionActive={setIsJobDescriptionActive}
        jobDescriptionId={jobDescriptionId}
        isJobDescriptionActive={isJobDescriptionActive}
      ></Jobdesc>
    );
  }
}

export default App;
