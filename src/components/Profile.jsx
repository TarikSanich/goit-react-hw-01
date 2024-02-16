// export const Profile = ({
//     name, tag, location, image, stats
// }) => {
//     return (
//         <div>
//             <div>
//                 <img src={image} alt="User avatar" />
//                 <p>{name}</p>
//                 <p>{tag}</p>
//                 <p>{location}</p>
//             </div>
//             <ul>
//                 <li>
//                     <span>Followers</span>
//                     <span>{stats.followers}</span>
//                 </li>
//                 <li>
//                     <span>Views</span>
//                     <span>{stats.views}</span>
//                 </li>
//                 <li>
//                     <span>Likes</span>
//                     <span>{stats.likes}</span>
//                 </li>
//             </ul>
//         </div>
//     )
// }

import css from './Profile.module.css';

console.log(css);

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.contacts}>@{tag}</p>
        <p className={css.contacts}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>  {followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.value}>  {views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>  {likes}</span>
        </li>
      </ul>
    </div>
  );
};