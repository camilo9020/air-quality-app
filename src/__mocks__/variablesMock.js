const localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

const google = google ||
{
  maps: {
    LatLng()
    {
      return null;
    }
  }
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
Object.defineProperty(window, 'google', { value: google });