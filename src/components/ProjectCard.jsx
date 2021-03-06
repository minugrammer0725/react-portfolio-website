import React from "react";

function ProjectCard({
  name,
  tools,
  description,
  src,
  git = "",
  website = "",
}) {
  // we further need the image src, github link, website link.

  const renderedTools = tools.map((tool) => {
    return (
      <div key={tool} className="inline">
        <span className="inline-block bg-light-secondary dark:bg-dark-secondary rounded-full px-3 py-1 text-sm font-semibold text-dark-text mr-2 mb-2">
          {tool}
        </span>
      </div>
    );
  });

  return (
    <div className="rounded overflow-hidden bg-light-component dark:bg-dark-component shadow-md shadow-light-secondary dark:shadow-dark-secondary hover:scale-110 duration-300">
      {/* <div className='group container'>
                <div className=' opacity-1 group-hover:opacity-30 duration-300'>
                    <img className='w-full' src={src} alt='project'/>
                    <div className=' opacity-1 group-hover:opacity-100 mb-8 duration-300 relative top-5'>
                        <button className='primaryBtn mx-auto' disabled={git === '' ? true : false}>Git</button>
                        <button className='primaryBtn mx-auto' disabled={website === '' ? true : false}>Website</button>
                    </div>
                </div> */}

      <div className="group  relative px-3 ">
        <img className="w-full block opacity-1 mt-4 " src={src} alt="project" />
        {/* <img className="w-full block opacity-1 mt-4 group-hover:opacity-30 duration-300 " src={src} alt="project" /> */}
        {/* <div className="absolute top-16 left-0 right-0 mx-auto">
          <button
            className="primaryBtn mx-2 opacity-0 group-hover:opacity-100 mb-8 duration-300 relative top-5"
            disabled={git === "" ? true : false}
          >
            Git
          </button>
          <button
            className="primaryBtn mx-2 opacity-0 group-hover:opacity-100 mb-8 duration-300 relative top-5"
            disabled={website === "" ? true : false}
          >
            Website
          </button>
        </div> */}
      </div>
      <div className="px-6 py-4">
        <div className="text-light-primary dark:text-dark-primary font-bold text-xl mb-2">
          {name}
        </div>
        <p className="text-light-secondary dark:text-dark-secondary text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">{renderedTools}</div>
    </div>
  );
}

export default ProjectCard;
