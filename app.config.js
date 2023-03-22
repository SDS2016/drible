

export default{
  expo:{
    "name": "drible",
    "slug": "drible",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/drible-app-icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/drible-app-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },

  }
}
