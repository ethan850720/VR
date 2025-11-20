var APP_DATA = {
  "scenes": [
    {
      "id": "0-car",
      "name": "car",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32752618605489303,
          "pitch": 0.09942045143997902,
          "rotation": 0,
          "target": "1-horse"
        },
        {
          "yaw": -2.4683098356817013,
          "pitch": 0.16627172460883344,
          "rotation": 0.7853981633974483,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.804295676153366,
          "pitch": -0.3749354720598461,
          "title": "Title",
          "text": "車<div><br></div>"
        }
      ]
    },
    {
      "id": "1-horse",
      "name": "horse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0199652282957263,
          "pitch": 0.017687240614723265,
          "rotation": 0.7853981633974483,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2143039715927415,
          "pitch": -0.3656901143382889,
          "title": "Title",
          "text": "摩天輪<div><br></div>"
        }
      ]
    },
    {
      "id": "2-",
      "name": "沙",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9746131539892229,
          "pitch": 0.30049890232055354,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": 3.116077340604103,
          "pitch": 0.3560729277435897,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "雲",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0051558139381704,
          "pitch": 0.156632091590863,
          "rotation": 0.7853981633974483,
          "target": "2-"
        },
        {
          "yaw": 2.9656485929604646,
          "pitch": 0.46254949303247095,
          "rotation": 4.71238898038469,
          "target": "1-horse"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2722852736677392,
          "pitch": -0.14455872009210324,
          "title": "Title",
          "text": "飛車<div><br></div>"
        }
      ]
    },
    {
      "id": "4-",
      "name": "遊",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.46555916106401085,
          "pitch": 0.1256030970427382,
          "rotation": 10.210176124166829,
          "target": "1-horse"
        },
        {
          "yaw": -0.280023881309587,
          "pitch": 0.21475384942065645,
          "rotation": 0.7853981633974483,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.411230212159559,
          "pitch": 0.032038881087014914,
          "title": "Title",
          "text": "蒿<div><br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
