import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../css/featureBox.module.css'

const FeatureBoxItem = ({ title, description, icon, link }) => {
  const linkComponent = link ? <Link to={link} >mehr</Link> : null;
  return (
    <div className={styles.featureBox}>
      <div className={styles.featureBoxIcon} >
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {linkComponent}
    </div>
  )
}

export default FeatureBoxItem

