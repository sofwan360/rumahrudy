var APP_DATA = {
  "scenes": [
    {
      "id": "0-dinning",
      "name": "DINNING",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.5877678000003623,
        "pitch": 0,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -0.5961845622071742,
          "pitch": 0.36908618906007007,
          "rotation": 0,
          "target": "4-taman"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rk-a",
      "name": "RK A",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 3.108767700000776,
        "pitch": 0,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -2.9112035741686793,
          "pitch": 0.23400218331495104,
          "rotation": 0,
          "target": "2-rk-b"
        },
        {
          "yaw": -2.626197592626653,
          "pitch": 0.15416981178472255,
          "rotation": 0,
          "target": "4-taman"
        },
        {
          "yaw": 3.051096692222485,
          "pitch": 0.10820302887263011,
          "rotation": 0,
          "target": "0-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rk-b",
      "name": "RK B",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.6071678900000457,
        "pitch": 0,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": 2.5426919548732148,
          "pitch": 0.4067881478788067,
          "rotation": 0,
          "target": "0-dinning"
        },
        {
          "yaw": -1.971899474799077,
          "pitch": 0.4782041978476066,
          "rotation": 0,
          "target": "4-taman"
        },
        {
          "yaw": 0.4185524131089444,
          "pitch": 0.18186628582570208,
          "rotation": 0,
          "target": "1-rk-a"
        },
        {
          "yaw": 0.14655225010895023,
          "pitch": 0.0948021281329563,
          "rotation": 0,
          "target": "3-rtm-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-rtm-a",
      "name": "RTM A",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 3.1268936700007615,
        "pitch": 0,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": 3.0980341552293886,
          "pitch": 0.3588770639715797,
          "rotation": 0,
          "target": "1-rk-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-taman",
      "name": "TAMAN",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
