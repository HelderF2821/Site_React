import React, { useEffect } from 'react';
import '../css/timeline.css';

const Timeline = () => {
  useEffect(() => {
    const timelines = document.querySelectorAll('.timeline2');

    function debounce(func, wait, immediate) {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function callbackFunc() {
      let h, timeline, li, rect, parent_rect, i, items;
      for (h = 0; h < timelines.length; h++) {
        timeline = timelines[h];
        parent_rect = timeline.getBoundingClientRect();
        items = timeline.querySelectorAll('.timeline2 li');
        for (i = 0; i < items.length; i++) {
          li = items[i];
          rect = li.getBoundingClientRect();
          if (
            rect.bottom <= parent_rect.top + rect.height / 2 ||
            rect.top >= parent_rect.bottom - rect.height / 2
          ) {
            li.classList.remove('in-view');
          } else {
            li.classList.add('in-view');
          }
        }
      }
    }

    const updateLayout = debounce(function(e) {
      callbackFunc();
    }, 500);

    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', updateLayout);
    window.addEventListener('scroll', callbackFunc);
    for (let h = 0; h < timelines.length; h++) {
      const timeline = timelines[h];
      timeline.addEventListener('scroll', callbackFunc);
    }
  }, []);

  return (
    <div className="timeline2">
      <ul>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
          <span className="time">
            <span>JUN, 17<sup>th</sup></span>
            <span>12:00 AM</span>
          </span>
        </li>
        {/* Ajoutez les autres éléments li ici */}
      </ul>
    </div>
  );
};

export default Timeline;
