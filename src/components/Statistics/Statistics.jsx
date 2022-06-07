import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import getRandomHexColor from "helpers/common";


export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(buildItem)}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired),
}

function buildItem({ id, label, percentage }) {
  return (
    <li key={ id } className={s.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={s.label}>{ label }</span>
      <span className={s.percentage}>{ percentage }%</span>
    </li>
  );
}
