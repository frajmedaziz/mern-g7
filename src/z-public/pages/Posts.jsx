import React, { useEffect, useState } from "react";

const Posts = () => {
  const { log, error } = console;
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [pMin, setPMin] = useState(1);
  const [metaData, setMetaData] = useState({});

  const handleGetPosts = () => {
    fetch("http://localhost:3000/posts?_page=${page}&_per_page=12")
      .then((res) => res.json())
      .then((data) => {
        //log(data);
        setMetaData(data);
        setPosts(data.data);
        setPages(data.pages);
      })
      .catch((err) => error(err));
  };

  const handlePrevPage = () => {
    if (metaData.prev) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (metaData.next) {
      setPage((prev) => prev + 1);
    }
  };
  const handleClick = (i) => {
    let pArray = Array.from({ length: 5 }, (_, i) => pMin + i);

    setPage(pMin + i);
  };

  useEffect(() => {
    handleGetPosts();
    // log(pMin + 4);
    log(page);
    log(pages);
    if (page == pMin + 4) {
      log("limit reached");
      if (pages - page == 1) {
        setPMin((prev) => prev + 1);
      } else {
        setPMin((prev) => prev + 4);
      }
    }
  }, [page, pages]);

  return (
    <div className="p-4">
      <h3 className="text-xl">Posts</h3>
      <div className="flex flex-wrap gap-4 ">
        {posts.map((v, i) => (
          <div key={i}>
            <img className="h-24 rounded" src={v.imgUrl} alt={v.title} />
            <div className="flex justify-between px-1 ">
              <span> ID: {v.id}</span>
              <span> {v.views}</span>
            </div>
            <div className=" p-1 ">
              <span className="text-xs font-light capitalize">{v.title}</span>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        id="pagination"
        className="flex justify-end items-center px-2 gap-1 flex-wrap mt-4"
      >
        <button
          disabled={metaData.prev == null}
          onClick={handlePrevPage}
          className={p-1 disabled:bg-white disabled:text-gray-200 bg-gray-100 border rounded px-2 hover:bg-gray-200}
        >
          <ChevronLeft size={20} />
        </button>
        {Array.from({ length: 5 }, (_, i) => (
          <button
            onClick={() => handleClick(i)}
            key={i}
            className={`p-1  ${
              page == pMin + i
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "bg-gray-100 hover:bg-gray-200"
            }   border rounded px-2 `}
          >
            {pMin + i}
          </button>
        ))}
        <button
          disabled={metaData.next == null}
          onClick={handleNextPage}
          className={p-1 disabled:bg-white disabled:text-gray-200 bg-gray-100 border rounded px-2 hover:bg-gray-200}
        >
          <ChevronRight size={20} />
        </button>
      </div> */}
      <div className="flex justify-center items-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 p-1 rounded min-w-96">
          {" "}
          Afficher plus
        </button>
      </div>
    </div>
  );
};

export default Posts;
