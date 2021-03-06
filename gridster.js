var gridster = gridster || {};

(function (d, gr) {
    'use strict';
    gr.init = function () {
        var go = d.createElement("div");
        var b = d.body;
        var de = d.documentElement;
        var mh = Math.max(
            b.scrollHeight,
            de.scrollHeight,
            b.offsetHeight,
            de.offsetHeight,
            b.clientHeight,
            de.clientHeight
        );
        var bg = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOTMxODYwQUE2RDgxMUUzOTM0QjhGMkE3MUFCQjhFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOTMxODYwQkE2RDgxMUUzOTM0QjhGMkE3MUFCQjhFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA4MTUzMDc1QTZEODExRTM5MzRCOEYyQTcxQUJCOEU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA4MTUzMDc2QTZEODExRTM5MzRCOEYyQTcxQUJCOEU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QAH0OAAAACNJREFUeNpi/P//PwNBwMj4n4mBSDCqEH9QAoP7PzEKAQIMAJUvBg9ADFr4AAAAAElFTkSuQmCC)';

        var styles = {
            position: 'fixed',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            zIndex: 99999,
            width: '100%',
            height: mh + 'px',
            background: bg
        }

        if (typeof Object.merge !== 'function') {
            Object.merge = function (o1, o2) {
                for(var i in o2) { o1[i] = o2[i]; }
                return o1;
            };
        }

        go.style = Object.merge(go.style, styles);;
        b.appendChild(go);
    };
})(document, gridster);

gridster.init();
