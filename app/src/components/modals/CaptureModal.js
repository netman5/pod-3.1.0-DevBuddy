import React from 'react';
import styles from '../style/capturemodal.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'react-feather';

const mockTabs = [
  {
    id: 1,
    url: 'http://github.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    name: 'Github',
  },
  {
    id: 2,
    url: 'http://leetcode.com',
    img: 'https://repository-images.githubusercontent.com/135522239/b61abe80-7bd4-11e9-8db4-03c18a436041',
    name: 'Leetcode',
  },
  {
    id: 3,
    url: 'http://linkedin.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    name: 'Linkedin',
  },
  {
    id: 4,
    url: 'http://leetcode.com',
    img: 'https://repository-images.githubusercontent.com/135522239/b61abe80-7bd4-11e9-8db4-03c18a436041',
    name: 'Leetcode',
  },
];

const Tab = ({ tab }) => {
  return (
    <li>
      <div className={styles.tabList}>
        <X size={15} style={{ marginRight: '10px' }} />
        <img src={tab.img} alt='github' />
        <a href={tab.url}>{tab.name}</a>
      </div>
    </li>
  );
};

const CaptureModal = ({ open, onClose }) => {
  return (
    <motion.div>
      {open && (
        <AnimatePresence>
          <motion.div
            className={styles.modalContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: 'spring', stiffness: 100 },
              default: { duration: 0.1 },
            }}
            exit={{ opacity: 0, scale: 0 }}
            //onClick={onClose}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div className={styles.header}>
                <h1>Total: 4 Tabs</h1>
                <X style={{ cursor: 'pointer' }} onClick={onClose} />
              </div>

              <div className={styles.tabs}>
                <ul className={styles.ul}>
                  {mockTabs.map((tab) => {
                    return <Tab tab={tab} />;
                  })}
                </ul>
                <div className={styles.options}>
                  <select>
                    <option>Education</option>
                    <option>Entertainment</option>
                    <option>Foodie</option>
                  </select>

                  <select>
                    <option>Leetcode</option>
                    <option>React Docs</option>
                    <option>Docker Docs</option>
                  </select>
                </div>
              </div>

              <button>Capture</button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default CaptureModal;
