Template.escapeB.onCreated(() => {
  Meteor.call('currentLevel', (err, result) => {
    if (err) return;
    Session.set('currentLevel', result);
  });
});

const computeDuration = () => {
  const currentLevel = Session.get('currentLevel');
  const start = currentLevel.metadata?.start || 0;
  const end = currentLevel.metadata?.end || 0;
  const res = ((end - start) / (60 * 60)) | 0;
  return res;
};

Template.escapeB.helpers({
  iframe() {
    return FlowRouter.current().queryParams.n;
  },
  duration() {
    computeDuration();
  },
  youWin() {
    const currentLevel = Session.get('currentLevel');
    if (currentLevel.metadata?.end) return false;
    return computeDuration() < 60; // 60 minutes
  },
});

const click = () => {
  const snd = new Audio('data:audio/wav;base64,UklGRuodAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNTguMzMuMTAwAGRhdGGkHQAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAf4B/gX2DeYx+h5B9lG+Ud4iFe2lzjHRifH59cIZwf5uFfY6PjIuOfnx+inh0eXh5a3p4e318gISBhoSBiYeBgoaDgYOAgoB8foGBgHl9gnt8fYB+fn5+goaDgoWGhISFhYGCgH6Afnx9fX59fn9/gYGBgYOEgYKDgYGBgIGBgIB/gIB/f39/f4B/f4B/gIGAgICBgYCAgICAgH9/f39/gICAgICAgYGAgICAf39/f35/f39/gICAgYGBgYGBgICAf39/fn9+fn5/f3+AgICBgYGBgYGBgICAgIB/gH9/gH9/gICAgICAgICAgIGBgYGBgICBgICAgIB/gH9/gICAgICAgYGBgYGBgIGAgICAgICAgH+AgICAgICAgICAgYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgYCDc4F0e3l1jXqJd3uKippxn3Z8hX2fZ4x3ZopygnKGfGuSfoqPe36FjoOSgHmAe4Z4e357gHx8fXmJhn+DfICGg4GCfXuBgYB/g39/fX+DgYaAeX5/fYKAfH18f3+Cgn+Egn+BgoKAgIB9f4F+foB/f4B/goGAgICBgYCAf39/gIF/gH9/gYGAgICBgX+AgYCBgYCAgICBgICAf39/f39/f4CAgICBgoGCgoKCgYGAgIB/f39+fn9/gICAgIGBgYGCgoKCgYCAgICAf39/f3+Af39/gICAgICAgYGBgYGBgIGAgIB/gH+Af39/f4CAgICAgYCAgYGBgICAgICAgH9/f3+Af4B/gICAgICBgIGAgYCAgICAgIB/gICAf4CAgICAgICAgIGAgICAgICAgH+Af4CAf4CAgICAgICAgICAgICAgICAgICAgICAgH+AgICAgICAgICAgICAgIGAgICAgICAgICAgICAgICAgICAgICAgICBgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICAgICAgICAgICAgICAgICAgICAgICBgICAgICAgICAgICAgICAgICAgIGAgYCAgICBgICAf4CAf4B/f4B/gICAgICAgICBgICAgICAgICAgICAf4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==');
  snd.play();
};

const beep = () => {
  const snd = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');
  snd.play();
};

const buzz = () => {
  const snd = new Audio('data:audio/wav;base64,UklGRqYTAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNTguMzMuMTAwAGRhdGFgEwAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIB/fXp3gZmpkmBLWICrmn2FiIBqWX+rpo1tYnFwb3+Tp5h2cnZ0dn2UnINvZ22DiYeQlpV8WGF7hYmOmn9TfcagOTCS2rRPH3Plz1UfZ6+LN1XO5aBjW5GcaEVVe4mAgJelkoSKi4BtaHF1cXSGkYuIioyKgHZ3fXl0eH+FhYWGhYSDf3p4eH+Vo4lcUGGGqpmBh4V+aVqDqaGKa2JycXSElqiWdHFzcnV+lZqBb2hwh4uJkZWUeFdke4SJjph7VIbKmjQ0mtqrRyF/6sdNIm+xhDRd1eCZXl2VmmRGWH6Jf4GYpI+Diop+bGlzdnF1iZGLh4mLiX92eX14dHiAhYWGh4SDgn99f396dXJ9ma+XYElbhquVe4eJf2dXgKukjG9ndnBuf5OllXRyd3R1fZWcg3Bpb4SHhI+Xl3tXYXqDiZCcgFWAxZo0MJbcsk0geOfLUiBqsIczVtDjn2JdlJxmRVZ9iX+Al6WRg4mLgG5pcnZxdIaQioaJjYuAdnh9eXR4gYWDg4WFhIOAfoGBe3VydYqpq3xOT2uZqYiAioR1WmKYrpyBZmpzbnmJnKSFcHVzcneHnZN5bGl4iYeKk5eNZlVugImNlpZmWaTFbiNWv9aHKziy75krNJKtYC+M6sqBVnKih1JGZoaGfYegnoiGjYl4amx0c296jY+JiY2Ohnl0e312dHuDhYSGhoWEgX5+gHx1cXqUq5xoSVSBrpx7hYqAalV5qqeObmJ0c3CAk6WXdXB2c3R7k56HcWhtg4qGj5WWf1lfeYOIjpqDVXjEpz8ritm6Vh5q4dVdHl+ukjtNxealZlmOn2xHU3mJgH+UpZODiYyCb2hxdnN0hZCKhomNjIF2dn16dXd/hYWFhoWDgn99gIJ9dnJ0h6atglFOaJSqi36KhnhdXpKsnYRoanVudoaZpIlxdXNydoWdl3xtZ3OGhoqVmZBrVWt+houUmGxVnMh6JUu325MxLqPwpzMtiK9pLX7m0YhYbKCMVkZjhId9hZ2giYWNinprbHV1cHiKjoiIjI6IfHV7fXd0eoGEhIWGhIOCf3+AfXZxeJCqoG1KUnusoHyDi4JtVXOmqZFyYXJ0b36RpJx5cHZzc3mQn4lyaWuAiYaPl5iCWlt3g4eNmolYb76wSSd+1cNiHlvW3mwgVaiYQUK56q9tV4ehckhPdoqCfpCjlYSJjYVyaG91cnKCkIuGiIyMg3h3fXt1dn2DhIWGhYSCgH6Agn13cnKDo6+IVE1kkKuPfYmGel9bjayfhmpodW91hZeljXJ0dHF1g5uafm5ncYWHiZSZkm9UaH2Gi5OaclKRyIYqQ63cnTgmlO+1Pih/sHMucOHZkFplnJFbRl+CiH6Dm6GKhI2MfGpqdHZwd4qPiYeKjYl9dnp+eHR5gIOEhoeFg4J/f4F+d3F2jKejc01QdamlfoGLg3FWbKKrlXZhcHZvfI6in3xvdXNzeI2fjXRqaX2Kho2WmIZdWHWDiIyZjltnt7hVJXHPyW0gTs3neiFKo6FKOqzst3JVgKJ5S01yioN9jaKYhIiNhnRobnZ0coCPjIaIjIyEeXd9e3V1fIOEhIaGhIOAfn+BfXZxdY2qp3RMUXSkpYGBioNxV2uhq5Z5ZG90bnyNoJ99cHZzcniNoI92aml7iIWNlpmIX1hzgoiMmJBeYrK7WiRrzM1zIUjG6YIjRZ+jTzel7Lt1VX2ifExMcIiDfoyimYSHjYd0aG52dHF/joyGiIyNhXl2fHx2dnyChISGhoSDgH6Agn54c3F+nrGSWktfiKuWfYeIfGRXg6ykjG1ldHFzgpOlk3NydHF1f5edhHBnboSJiJKXlHZVY3yFipCbfFKDyJkzNJvcrUcfferJTSFusYQyW9TinGBelZlkRll/iX+AlqOPhIyNgG1pcnZxdIePioeKjYp/dnl9eXR4f4SEhYeFg4KAfoB/eHF0iKSofVFNbaKrg36KhHVZZJusmXxjbndveoufoYFudXRzdomfk3draHmJhouVmIxkVnCBh4qWlGNdq8JnI17E038mPLnukSk7l6pZMpXqw3xVdaKDUElriIV9iaCchoaNiHdpbHV0cX2NjYeHjI2HenV7fXZ1e4KFhYaGhIOBfn+Cf3hzcXyasJhgSluCqZp9hoh+aFZ8qaeQcWVzcXGAkaOXdnJ1cXR9lZ+HcWdrgYmHkZeWe1dgeYSKj5uCU3jEpT0tjdq4Uh1t49RcH2KujjhOyOelZVqPnWpHVHqJgH+To5KDio2Cb2hxdnJzhI+Kh4qNi4F2d316dHd+g4SFh4WDgoB+gH95cnOEoaqDU0tnnK6HfIqGeFtfla6cgGRrd3B4iZ2khW90dHN1hZ6WemxndomHipSYj2hUbYCGipSXaVihx3QlUbrXjC0xqvGhMDKOrmQvhujMhFZvoYpUR2eHhn2Gnp6IhY2KeWprdHRxe4yOh4eLjoh7dXt9d3R6goWEhoaFhIF+foGAeXRxepavnmZKWX2nnn6EiX9rVXWnqJJ1ZXJzcH+Oopp4cXVxc3ySoIpzaGp+iYeQl5eAWl13g4mOmohWb7+vRyiA1sFeHV7Z3mofVqmXQEO76q1rV4igcUlRdomCfpCjlISKjoRwaHB2cnKCj4uHiY2Mgnd3fXt1dn2DhIWHhYOCgH6AgHpzcoGdq4pYSmKWsIx7iYd6XlqOrZ+EZmh3cXaHmqWKb3N0cnWDnJl9bWdziIeJk5eRbVNqf4aJk5lwVZjJgShGr9qYNSqb8K84K4SxcC534tSLWWiekFlFYYWIfoScoIqEjIt8a2pzdXF5i46Ih4uOiX11en13dHmBhYSFhoWEgX5+gX94cnKBoK6MV0tjkq2OfImGemBajK2ghmlpdm91hpikjHF0dXF1gpuaf25ncoaHiJOYk3BUaH6GipKac1SRyIcrQqvbnjomk++2Pih+sXUvb9/YkFtlnJJcRV+DiH6Dm6GLhIyLfWtqdHZxd4qPiIeLjop9dXl+eHR5gYSEhYeFg4J/f4GAenVxdpCtpXBLVHWipYKBioJwVmuhrJd6ZG91cHuLn599b3Vyc3mNoJB2aWh7iYeNlpeGXll0gomMmJBdY7S8WSJrzc1yIUnI6oEiRaCjTTam7bt1VX6je0xLcImDfYuimYWIjod0aG52c3F+jo2HiY2NhHl2fHt1dXyDhISHhoSDgX5/gHt0cX2ZrJNfSlyNsZR6h4h9ZFaErKOJamZ3cnOElqWQcXJ1cnR/mZyBb2hwhYiHkpeVdlRkfYWIkJp6VIjJlTI3ndupRCGC68RKI3KxgTJg1t6YX1+XmGJFWoCJf4GYoo6Di4x/bWlydnF2iI+JhoqOi391eH55dHiAhYWFhoWDgn5+gYF7dXF1jKqpd05Sb52nhYCKg3NYZZusmn9mbXVveYmcoYJwdXJyeIqfk3hrZ3eIh4yWmIpjV3CBiIyXlGNcq8JmIl7F1H8mPLrvkSg7l6pYMZXrxHxVdqKDUElrh4V9iKGchoaOiHZpbXZ0cHyNjYeIjI2GenV7fHZ1e4KEhIaGhIOBfn+AfHVxe5WrmWRKWIawmXuFiX9oVX2qpo1tY3VzcoKTpZV0cHVydHyVnoVxaG2DiYeQl5Z7VmB7hIiOm4FUfcahOy+Q2bRQHnHl0VcgZq+MN1LL5KFjW5GdaEZVfYqAf5SjkYOKjYJvaXF2cnSGj4qHio2MgXZ4fXp0d3+EhYWGhYSCf32Agnx2cXOIqKx+UFBrmKqJfomEdltglq2cgmdsdW94h5qjhnB1c3J3h56WemxndYeHi5WYjmhVbX+Hi5WXaVegx3QkUbvYiywyqvGhMDKOrmQuhejNhFZvoYlVR2aGhn2Gnp6Iho2KeGlsdXVweoyOiIiMjoh7dXt9d3V6gYSEhoaEg4F/f4F9dnF4kamea0tUf66ffISKgWtUdaeokXFjdHVxgJGkmXZvdXJzepKfiXJpa4GKho+Wl4BYXXmEiI2ah1ZzwaxFKYLWvlwdYtzbZh9aq5Y+Rr/oqmlYiqBvR1F4ioF+kaOUg4mNhHFocHZyc4OPi4aJjYyCd3d9enR2foSFhYaGhIN/fYCBfHVxeJKsoGtKVXypn36EioFsVXOmqJJ0ZHJzb3+Popp4cXZyc3qRoItzaWp+iIaPl5iDWlt3g4iNmopYbrywSid91MNiHlrW4G4gVKiaQkK46q9tVoehc0lQdomCfpCjlYOIjYRxaHB2c3KCj4uGiY2Ng3d2fXt1dn6DhISGhoSDgH6Agn13cnKCoq+JVU1kkKyQfYmGeV9ai62hh2lodnB1hJaljXFzdHJ2gpubf25mcYaIiZOYkm9UaH6GipKac1ORyokqP6rcnzolkvC3Pid9snUtbd/ZkVtlnJNcRV6CiH6CmqKMhIyMfWtqc3VwdomPiYiLjol9dnp9d3R5gISEhoeFg4J/f4B+d3F1jKekdE1QdKimf4CKg3FWa6GrlXdicXZvfI6hnnxvdXNzeI2gjnRqaX2Kho2WmIdeWHSCh4uYj11mtrpXJG7Ny28gS8rofiJIoaJMOanruHNVf6N7TExxiYN9jKKYhYeNhnRobnZ0coCOjIeIjI2FeHZ8fHV1fIOFhYaGhIOAfn+CfndzcX+esJBaS2CJq5R9h4d8Y1eErKOMbWd1cHOCk6SSc3N0cXWAmJ2Db2dug4iIk5iUdVVkfIWKkZt7UoXIljI2ndyrRSCB68ZLInCxgTFe1uCaX1+WmGJGWX+Jf4CXo46Ei41/bGlzdnF1h4+Jh4uOi392eH15dHh/g4SFh4WDgoB+gH94cnSIpKd7UE1uo6qDf4uEdFhlnKyZe2Jud3B6i5+igG50c3N3iZ+Sd2toeYqHjJWYi2JWcYKHipaTYl6twWUjYMXSfSU+vO6PJz2ZqVcymOvCe1V3o4JPSWyIhX2JoZuGho2Id2ltdXRxfY6Nh4iMjoZ6dXx8dXR7goWEhoaFhIF+f4J/eHNxfJqwl19LXIOqmX2GiH5nVn2qpo9xZnRxcYGRo5Z1cnVxdH6Wn4ZxaGyBiIeRmJZ7V2B6hIqPm4JTecSjPC6P2rZRHW/j01ofY66NN1DK5qRlWpCdakdVe4mAf5SjkYSLjYFuaXJ2cXOFj4qHio6MgXZ4fXp0d36DhIWHhYOCgH+Af3lyc4ShqYNTTGidrod9ioZ4W16VrZyAZGt4cHiJnaSFbnN0cnaGnpZ6bGd2iYeKlJiPaFRtgYaKlJdpWaLGcyVSu9eLLTKr8J8vM4+uZC6G6MuDVm+hiVRHZ4eGfYaenoiFjIp6amx0dXF7jI6Hh4uOiHt1e312dHqChYSGhoWEgX5+gX93cnOEo62FUkxomKyKfYqFeFxdk62dgmdrdm93iJqjh3B1dHJ1hZ2XfG1ndIeGipSZkWtUa3+GipSYbVabx3onTLbZkjEtovCoNS+Ir2oufuXQiFhrn41WRmSFh36Fnp+IhIyKemprdXVxeYuOh4eLjol8dXp9d3R6gYSEhoeFg4F/f4GAeXRxeJSvoGlKV3qmoYCDiYBsVXGlqpR2ZHF0cH2NoZ16cHVyc3qQoIx0aGl9iYeOlpeCW1t2g4mNmYtYary1TiV408ZmHlXU43IfUKecRD2z7LNuVoSidUpOdImCfY6jl4SJjoVyaG92c3GBj4yHiY2Mg3h3fXt1dn2DhIWHhoSCgH6AgHpzcYCcq41aSmCSsI97iIh7YFmLraCGaGd3cXWGmKWMcHN1cnSBm5p+bWdyh4iIk5iTcVRnfoWIkZp0VJHJiixAqNufOyWQ7rhAJ3yxdy9t3diRW2SblF1FXoKIfoOaoYuEjIt9a2pzdnF3iY+Ih4qOin51eX14dHiAhYSFhoWDgn5+gYF7dXF2j6ymcUxUdKGlg4GKgnFWaqCrmHtlb3Rve4ufoH5wdXJzeY2gkHZqZ3qJh46WmIdfWHOBiIyYkV1hsr1bI2nMznQhRsbrhCNDnqRPNaPtvXZVfKN9TUtviIR9i6KahYeOh3RobnZzcH6OjIeJjY2FeXZ8fHV1fIKEhIeGhIOBfn+Ae3RxfZirlGBJW4uwlXqHiX5lVoKspIpqZXZyc4SWppJycXVydH6YnYJvaG+FiYiSl5V3VGN9hYiPm3xThciYNDWa2qxHIH7qyE0ib7GDM1zU4JpgXpWZY0VZf4l/gJejj4OLjIBtaXJ2cXWHj4mHio2Lf3Z4fXl0d3+EhIWGhYSCf32AgXt1cXWLqqp5TlFunKiGf4qDdFlkmq2af2ZtdW96iZyig3B1cnJ4iqCUeGtnd4iHjJaYjGRWcIGIjJaVZFupxGkiW8PVgSY5t/CUKTiWq1ovk+zGfVV0ooRRSGqHhX2IoJyGho6IdmhtdnRwfI2Nh4iMjoZ5dXt9dnV7goSEhoaEg4F/f4GAe3p5e4KHhX5/hYV/foCBgH18fX+AgICBhISDgoF/fn59fn9+f4KCgoKBgICAgIGAgH99f4GAf4CBgYCAgIGBf35/gYB/f4CCgoCAgIF/fn5/gYGAgIGBgIGBgQ==');
  snd.play();
};

Template.escapeB.events({
  'click .js-key-code'(e) {
    const { lock, code } = e.currentTarget.dataset;
    const lockString = `lock${lock}`;
    beep();

    const currentLevel = Session.get('currentLevel');
    if (code === 'VALIDATE') {
      if (Session.get(lockString) === currentLevel.metadata[lockString].code) {
        // Success
        Meteor.call('enlightenZone', currentLevel.metadata[lockString].zone);
      } else {
        // Failure
        buzz();
        document.querySelector('#redLed').classList.remove('hide');
        setTimeout(() => {
          document.querySelector('#redLed').classList.add('hide');
        }, 3000);
      }
      Session.set(lockString, '');
    } else if (code === 'CLEAR') {
      Session.set(lockString, '');
    } else {
      Session.set(lockString, `${Session.get(lockString) || ''}${code}`);
    }
  },
  'click .js-activate-switch'(e) {
    const { zone } = e.currentTarget.dataset;
    if (!zone) return;
    click();
    Meteor.call('toggleZone', zone);
  },
});

Template.registerHelper('isEscapeLevel', () => {
  const level = Session.get('currentLevel');
  if (!level) return false;
  return level.metadata?.escape;
});

Template.registerHelper('gameStarted', () => {
  const level = Session.get('currentLevel');
  if (!level) return false;
  return level.metadata?.start;
});

Template.escapeTimer.onCreated(() => {
  const animationTime = 60 * 60;
  const minutes = 60;

  $(document).ready(() => {
    // timer arguments:
    //   #1 - time of animation in mileseconds,
    //   #2 - days to deadline

    $('#progress-time-fill, #death-group').css({ 'animation-duration': `${animationTime}s` });

    const deadlineAnimation = function () {
      setTimeout(() => {
        $('#designer-arm-grop').css({ 'animation-duration': '1.5s' });
      }, 0);

      setTimeout(() => {
        $('#designer-arm-grop').css({ 'animation-duration': '1s' });
      }, animationTime * 0.3 * 1000);

      setTimeout(() => {
        $('#designer-arm-grop').css({ 'animation-duration': '0.7s' });
      }, animationTime * 0.6 * 1000);

      setTimeout(() => {
        $('#designer-arm-grop').css({ 'animation-duration': '0.3s' });
      }, animationTime * 0.7 * 1000);

      setTimeout(() => {
        $('#designer-arm-grop').css({ 'animation-duration': '0.2s' });
      }, animationTime * 0.85 * 1000);
    };

    function timer(totalTime, deadline) {
      const time = totalTime * 1000;
      const dayDuration = time / deadline;
      let actualDay = deadline;

      // eslint-disable-next-line no-use-before-define
      const interval = setInterval(countTime, dayDuration);

      function countTime() {
        --actualDay;
        $('.deadline-days .day').text(actualDay);

        if (actualDay === 0) {
          clearInterval(interval);
          $('.deadline-days .day').text(deadline);
        }
      }
    }

    const deadlineText = function () {
      const $el = $('.deadline-days');
      const html = `<div class="mask-red"><div class="inner">${$el.html()}</div></div><div class="mask-white"><div class="inner">${$el.html()}</div></div>`;
      $el.html(html);
    };

    deadlineText();

    deadlineAnimation();
    timer(animationTime, minutes);

    setInterval(() => {
      timer(animationTime, minutes);
      deadlineAnimation();
    }, animationTime * 1000);
  });
});
