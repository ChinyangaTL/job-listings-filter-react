import React from 'react';

// let a = {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "/images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   }

const Listing = ({ listing, handleClick }) => {
  const tags = [listing.role, listing.level];
  return (
    <div
      className={`bg-white flex flex-col md:flex-row md:items-center py-6 px-4 pt-12 md:p-6 shadow-lg rounded-md my-16 md:my-6 relative ${
        listing.featured ? 'border-l-4 border-cyan-primary' : ''
      }`}
    >
      <div className="absolute -top-1/3 transform translate-y-2/4 md:static md:top-1/3 md:translate-y-0">
        <img src={listing.logo} alt={listing.company} />
      </div>
      <div className="md:ml-4 flex flex-col justify-between pb-4 border-b-2 md:pb-0 md:border-0">
        <h4 className="font-bold text-sm">
          {listing.company}
          {listing.new && (
            <span className="tablet--2 tablet--2--primary">New!</span>
          )}
          {listing.featured && (
            <span className="tablet--2 tablet--2--secondary">Featured</span>
          )}
        </h4>
        <h3 className="mt-2 transition cursor-pointer text-cyan-very-dark hover:text-cyan-primary font-bold text-lg">
          {listing.position}
        </h3>
        <p className="text-cyan-dark mt-2">
          {listing.postedAt} · {listing.contract} · {listing.location}
        </p>
      </div>
      <br className="md:hidden" />
      <div className="md:flex md:flex-wrap md:items-center md:ml-auto">
        {tags.map((tag) => {
          return (
            <span onClick={() => handleClick(tag)} className="tablet">
              {tag}
            </span>
          );
        })}
        {/* <span className="tablet">{listing.role}</span> */}
        {/* <span className="tablet">{listing.level}</span> */}
        {listing.tools.map((tag, index) => {
          return (
            <span
              className="tablet"
              key={index}
              onClick={() => handleClick(tag)}
            >
              {tag}
            </span>
          );
        })}
        <br className="md:hidden" />
        {listing.languages.map((tag, index) => {
          return (
            <span
              className="tablet"
              key={index}
              onClick={() => handleClick(tag)}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Listing;
