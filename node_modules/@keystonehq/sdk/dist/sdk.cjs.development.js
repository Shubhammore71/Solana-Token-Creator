'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var ReactDOM = _interopDefault(require('react-dom'));
var React = require('react');
var React__default = _interopDefault(React);
var Modal = _interopDefault(require('react-modal'));
var events = require('events');
var rxjs = require('rxjs');
var QRCode = _interopDefault(require('qrcode.react'));
var bcUr = require('@ngraveio/bc-ur');

const BaseQRCode = ({
  size = 200,
  data = "",
  ecl = "L"
}) => {
  return React__default.createElement(QRCode, {
    value: data,
    size: size,
    level: ecl
  });
};

(function (ReadStatus) {
  ReadStatus["canceled"] = "canceled";
  ReadStatus["success"] = "success";
})(exports.ReadStatus || (exports.ReadStatus = {}));

(function (PlayStatus) {
  PlayStatus["canceled"] = "canceled";
  PlayStatus["success"] = "success";
})(exports.PlayStatus || (exports.PlayStatus = {}));

(function (SupportedResult) {
  SupportedResult["UR_BYTES"] = "bytes";
  SupportedResult["UR_CRYPTO_HDKEY"] = "crypto-hdkey";
  SupportedResult["UR_CRYPTO_ACCOUNT"] = "crypto-account";
  SupportedResult["UR_ETH_SIGN_REQUEST"] = "eth-sign-request";
  SupportedResult["UR_ETH_SIGNATURE"] = "eth-signature";
  SupportedResult["UR_CRYPTO_MULTI_ACCOUNTS"] = "crypto-multi-accounts";
  SupportedResult["UR_SOL_SIGN_REQUEST"] = "sol-sign-request";
  SupportedResult["UR_SOL_SIGNATURE"] = "sol-signature";
})(exports.SupportedResult || (exports.SupportedResult = {}));

const styleBase = {
  minWidth: "16rem",
  height: "3rem",
  background: "#784FFE",
  borderColor: "grey",
  borderRadius: "8px",
  borderWidth: 1,
  color: "white",
  outline: "none",
  margin: 2
};
const Button = props => {
  const {
    onClick,
    children
  } = props;
  return React__default.createElement("button", {
    onClick: onClick,
    style: styleBase
  }, children);
};

const ButtonGroup = props => {
  return React__default.createElement("div", {
    style: {
      width: "100%",
      marginTop: "1rem",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "center"
    }
  }, props.children);
};

const DEFAULT_SPEED = 100;
const DEFAULT_MAX_FRAGMENT_LENGTH = 400;
const DEFAULT_UR = /*#__PURE__*/new bcUr.UR( /*#__PURE__*/Buffer.from("NO DATA", "utf-8"));
const useAnimatedQRCodePlayer = () => {
  const [data, setData] = React.useState(DEFAULT_UR);
  const [shouldShow, setShouldShow] = React.useState(false);
  const [refreshSpeed, setRefreshSpeed] = React.useState(DEFAULT_SPEED);
  const [maxFragmentLength, setMaxFragmentLength] = React.useState(DEFAULT_MAX_FRAGMENT_LENGTH);
  const [hasNext, setHasNext] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const urEncoder = React.useMemo(() => new bcUr.UREncoder(data, maxFragmentLength), [data]);
  const [qr, setQR] = React.useState(urEncoder.nextPart());
  const ee = React.useMemo(() => new events.EventEmitter(), []);

  const reset = () => {
    setData(DEFAULT_UR);
    setShouldShow(false);
    setRefreshSpeed(DEFAULT_SPEED);
  };

  React.useEffect(() => {
    if (urEncoder.cbor.toString("hex") !== DEFAULT_UR.cbor.toString("hex")) {
      setShouldShow(true);
    }
  }, [urEncoder]);
  React.useEffect(() => {
    const subscribe = rxjs.interval(refreshSpeed).subscribe(() => {
      setQR(urEncoder.nextPart());
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [refreshSpeed, urEncoder]);

  const finish = () => {
    ee.emit("finish", true);
  };

  const element = shouldShow ? React__default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, title && React__default.createElement("p", {
    style: {
      fontSize: "1.25rem",
      fontWeight: "bold"
    }
  }, title), React__default.createElement(BaseQRCode, {
    size: 288,
    data: qr
  }), description && React__default.createElement("p", {
    style: {
      fontSize: "1rem",
      textAlign: "center"
    }
  }, description), React__default.createElement(ButtonGroup, null, React__default.createElement(Button, {
    onClick: finish
  }, hasNext ? "Scan Keystone" : "Finish"))) : React__default.createElement("div", null);
  return [element, {
    play: (data, options) => {
      return new Promise(resolve => {
        setData(data);

        if (options) {
          options.refreshSpeed && setRefreshSpeed(options.refreshSpeed);
          options.hasNext && setHasNext(options.hasNext);
          options.title && setTitle(options.title);
          options.description && setDescription(options.description);
          options.maxFragmentLength && setMaxFragmentLength(options.maxFragmentLength);
        }

        ee.once("finish", () => {
          reset();
          resolve(exports.PlayStatus.success);
        });
      });
    }
  }];
};

class URTypeError extends Error {
  constructor(msg) {
    super(msg); // Set the prototype explicitly.

    Object.setPrototypeOf(this, URTypeError.prototype);
  }

}

const LoadingSpinner = () => {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      margin: "auto",
      display: "block",
      shapeRendering: "auto",
      animationPlayState: "running",
      animationDelay: "0s"
    },
    width: "200px",
    height: "200px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, React__default.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    stroke: "#9b9b9b",
    strokeWidth: "7",
    r: "35",
    strokeDasharray: "164.93361431346415 56.97787143782138",
    style: {
      animationPlayState: "running",
      animationDelay: "0s"
    }
  }, React__default.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    repeatCount: "indefinite",
    dur: "1s",
    values: "0 50 50;360 50 50",
    keyTimes: "0;1",
    style: {
      animationPlayState: "running",
      animationDelay: "0s"
    }
  })));
};

const QrReader = /*#__PURE__*/React__default.lazy(() => new Promise(function (resolve) { resolve(_interopNamespace(require('react-qr-reader'))); }));
let URTypeErrorMessage = "";
const useAnimatedQRCodeReader = () => {
  const [cameraReady, setCameraReady] = React.useState(false);
  const [expectTypes, setExpectTypes] = React.useState([]);
  const [urDecoder, setURDecoder] = React.useState(new bcUr.URDecoder());
  const [error, setError] = React.useState("");
  const ee = React.useMemo(() => new events.EventEmitter(), []);
  const [title, setTitle] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [description, setDescription] = React.useState(null);

  const reset = () => {
    setURDecoder(new bcUr.URDecoder());
    setError("");
  };

  const processQRCode = (qr, errorMessgeOnURType) => {
    processUR(qr, errorMessgeOnURType);
  };

  const handleStop = () => {
    ee.emit("read", {
      status: "canceled"
    });
  };

  const handleRetry = () => {
    reset();
  };

  const processUR = (ur, errorMessgeOnURType) => {
    try {
      if (!urDecoder.isComplete()) {
        urDecoder.receivePart(ur);
        setProgress(urDecoder.getProgress());
      } else {
        const result = urDecoder.resultUR();
        let foundExpected = false;
        expectTypes.forEach(et => {
          if (et === result.type) {
            foundExpected = true;
            ee.emit("read", {
              result,
              status: "success"
            });
            return;
          }
        });
        if (!foundExpected) throw new URTypeError(`received ur type ${result.type}, but expected [${expectTypes.join(",")}]`);
      }
    } catch (e) {
      if (e instanceof URTypeError) {
        setError(errorMessgeOnURType);
      } else {
        setError(e.message);
      }
    }
  };

  const element = React__default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, title && React__default.createElement("p", {
    style: {
      fontSize: "1.25rem",
      fontWeight: "bold"
    }
  }, title), description && React__default.createElement("p", {
    style: {
      fontSize: "1rem",
      textAlign: "center"
    }
  }, description), React__default.createElement(React.Suspense, {
    fallback: React__default.createElement("div", null)
  }, React__default.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, !cameraReady ? React__default.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  }, React__default.createElement(LoadingSpinner, null)) : null, React__default.createElement(QrReader, {
    onScan: data => {
      if (data) {
        setCameraReady(true);
        processQRCode(data, URTypeErrorMessage);
      }
    },
    delay: 100,
    style: {
      width: "100%"
    },
    onError: e => {
      setError(e.message);
    }
  }))), React__default.createElement("p", null, (progress * 100).toFixed(0), " %"), error && React__default.createElement("p", {
    style: {
      color: "red",
      fontSize: "1rem"
    }
  }, error), React__default.createElement(ButtonGroup, null, React__default.createElement(Button, {
    onClick: handleStop
  }, "Close"), error && React__default.createElement(Button, {
    onClick: handleRetry
  }, "Retry")));
  return [element, {
    read: (expect, options) => {
      return new Promise(resolve => {
        setExpectTypes(expect);

        if (options) {
          options.title && setTitle(options.title);
          options.description && setDescription(options.description);
          URTypeErrorMessage = options.URTypeErrorMessage ? options.URTypeErrorMessage : "";
        }

        ee.once("read", result => {
          reset();
          resolve(result);
        });
      });
    },
    cameraReady
  }];
};

const InitialPage = props => {
  return React__default.createElement("div", {
    style: {
      paddingLeft: "1rem"
    }
  }, React__default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: 0
    }
  }, React__default.createElement("img", {
    style: {
      display: "inline-block"
    },
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAKAAAAACc9ikyAAAD+ElEQVRYCb1WbWiNURw/Z9caY5SyrKzVhuUtZcYoJdZ8kMywGClG+WK+eJsPmogNKfZBxBbmAyPyEgvtA8UUX9inbVeb8AGTd8t2j9/vdp91ntPzPPd57h3/+t1z/uf/ev7nnP9zhUiMsmH2BOgF9ifmIjmrVpgrDWuScxfMeqUW2EqiB2sjgrlJTDsNZmHACqyP2xJzGcyq2iU4E7kTzFVw7fEw+Qbou9bn94K7FCIlgNFh6I7y0E8oAQ9/NlEBuAig71ifv4VspM1iiJnHHsGZyPohjmdzxzeu79acsyFJm8UQMnzbfONmUIvnsRTG4g3DWAM8B24DM4GkaR88WMGcxkYtQr2h+wl8niYPPJ0Aix+AU2Cu8UlmASRe0gHA1L1JYaLUBEPToc7v1hx7XdISTc/3tAiaXs+uE3K2ZdJaQE/MnLdDzvvhm3ij2wDTkc4vj3lLx/gmji7tqmL6voYNcRze17zwv4CemNuc/xt8NSoqsau5OfoD2TSAxDb+EXDTNdeX0igeHYSCaajzfGoWZWDidU90O84XWIZuYw4EvwDT0OK527GG8VUPfcuO4wPAsVvqt/MolIYDbsSmxLPUiS+gEpgBOH1Z+7HOC90MMBFXYnn0jM35S8hDrtZJCFgBluZEHB/bIWenc6XVV1Qo/MCxCoM2ucUi0lwubX4YfBng1TKvQ1426MWY1NSolAs94jJKVoYaOh2DbqGw3ddQqutqkGcooEG5rmHM+8DvMNZs7KVuUaiUWOUjOO0k9HIjSpzOq1RRv0xgus2jnTkONhxbKsZ4A7gFlMbWRChddMLtZ4v3O0YiojZvq8rkEbwCrOai278Dkw98BxYBLYD+anaB58sREzerosiAaMExjCbvl0KpooAV6HIx2IN1Bk8FTgF6cLDiCLCTk86z8mlKSCzBbr6S90NSooumiXYm8MjBgG+3KbZehXGygw6XmAQrEU0C77TETxII3ofA6zrrZR+PIAvoBrhTEnvAPIBJZAIdQLzS8r8BkxGTNqq5AxLHocQY8iYxOIKuwCu4Sxkr8B7g5bLoIiYMTjoExAtOvTqASYiORtmmJCohxRfyBv3GeqkVnDJWgLQQaAV45iw3k5oKsAMySb9UDcVaKuduUYWiX1xDObPJI/AHDBXhBsnvwiBZCXChAuA/nWdkQLxg0bJGOf8/tDtG9fxNKqNfisX4ZKamC/Gw/Zzs9e9GiL1Q5n0ICn6A5gQJ5KY7C4Ig33s90WibdXOsr3ud7wsoshcwiaAUPfegRm76syHgBylINaIX0c1hout8FecB/i/Uy23OedvZP/4Z5cDzSeAnYAZnK54P/BcahygHAD5dNh12tilAIPoLD0OnpwCV000AAAAASUVORK5CYII=",
    alt: ""
  }), React__default.createElement("div", {
    style: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginLeft: "1rem"
    }
  }, "Sync Keystone")), React__default.createElement("ul", {
    style: {
      marginTop: "2rem",
      listStyleType: "none",
      padding: 0,
      fontSize: "1rem"
    }
  }, React__default.createElement("li", {
    style: {
      marginBottom: "0.75rem"
    }
  }, "1. Turn on your Keystone hardware device"), React__default.createElement("li", {
    style: {
      marginBottom: "0.75rem"
    }
  }, `2. Select your "${props.walletMode}" as your Watch-only wallet(Companion App)`), React__default.createElement("li", {
    style: {
      marginBottom: "0.75rem"
    }
  }, " ", "3. Press the \"Scan Keystone\" button and scan the QR Code displayed on your Keystone hardware wallet"), React__default.createElement("li", {
    style: {
      marginBottom: "0.75rem"
    }
  }, " ", "4. Select account and check your watch-only wallet")), React__default.createElement("div", {
    style: {
      marginBottom: "1rem"
    }
  }, React__default.createElement("a", {
    style: {
      marginTop: "1.25rem",
      color: "#784FFE",
      textDecoration: "none"
    },
    href: props.link,
    target: "_blank",
    rel: "noreferrer"
  }, "Click here to view detailed tutorial")), React__default.createElement(Button, {
    onClick: props.onButtonClick
  }, "Sync Keystone"));
};

const customStyles = {
  overlay: {
    zIndex: 999
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    width: "37rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    postion: "relative"
  }
};
const useController = () => {
  const ee = React.useMemo(() => new events.EventEmitter(), []);
  const [visible, setVisible] = React.useState(false);
  const [walletMode, setWalltMode] = React.useState("");
  const [link, setLink] = React.useState("");
  const [mode, setMode] = React.useState(null);
  const [AnimatedQRCodePlayer, {
    play
  }] = useAnimatedQRCodePlayer();
  const [AnimatedQRCodeReader, {
    read,
    cameraReady
  }] = useAnimatedQRCodeReader();

  const close = () => {
    ee.emit("close");
    reset();
  };

  const reset = () => {
    setMode(null);
    setLink("");
    setWalltMode("");
    setVisible(false);
  };

  const goToRead = () => {
    setMode("read");
  };

  const renderPannel = pageMode => {
    if (pageMode === "initial") {
      return React__default.createElement(InitialPage, {
        walletMode: walletMode,
        link: link,
        onButtonClick: goToRead
      });
    } else if (pageMode === "read") {
      return AnimatedQRCodeReader;
    } else if (pageMode === "play") {
      return AnimatedQRCodePlayer;
    } else {
      return null;
    }
  };

  const element = React__default.createElement(Modal, {
    isOpen: visible,
    style: customStyles
  }, React__default.createElement("div", {
    onClick: close
  }, React__default.createElement("img", {
    style: {
      position: "absolute",
      top: "1rem",
      right: "1rem"
    },
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAAAmklEQVQoFZWRwQ3DIAwAa4brJPBP80hnaD/lD5N0iYxEfRVBxBGRwsvgO2PZklJaReTrvX/eTk7O+VVKuTtgDRYVPyOeHAysAFV40jCGEB69aHN/YSRZGK4JVuKu5/DrToDoqnI9tOh4vXJ2Qlc96kSY2lTfWs0m9DCT0r3MSkUrXR9r3eBCNbuDrY/td23z7Vg3wQhGIgcD+wPGY2fPvHuWagAAAABJRU5ErkJggg=="
  })), React__default.createElement("div", {
    style: {
      width: "35rem",
      padding: 18,
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#002237"
    }
  }, renderPannel(mode)));
  return [element, {
    play: (data, options) => {
      return new Promise(resolve => {
        ee.once("close", () => {
          resolve(exports.PlayStatus.canceled);
        });
        setVisible(true);
        setMode("play");
        play(data, options).then(() => {
          reset();
          resolve(exports.PlayStatus.success);
        });
      });
    },
    read: async (expect, options) => {
      return new Promise(resolve => {
        ee.once("close", () => {
          reset();
          resolve({
            status: exports.ReadStatus.canceled
          });
        });

        if (options.renderInitial) {
          setWalltMode(options.renderInitial.walletMode);
          setLink(options.renderInitial.link);
          setMode("initial");
          setVisible(true);
          read(expect, options).then(result => {
            reset();
            resolve(result);
          });
        } else {
          setMode("read");
          setVisible(true);
          read(expect, options).then(result => {
            reset();
            resolve(result);
          });
        }
      });
    },
    cameraReady
  }];
};

var Root = (() => {
  const [Controller, {
    read,
    play,
    cameraReady
  }] = useController();
  setupSdk(read, play, cameraReady);
  return Controller;
});

let initialized = false;
let read;
let play;
let cameraReady;

const bootstrap = () => {
  const htmlBody = document.getElementsByTagName("body").item(0);
  const sdkDiv = document.createElement("div");
  sdkDiv.id = "kv_sdk_container";
  htmlBody.appendChild(sdkDiv);
  Modal.setAppElement("#kv_sdk_container");
  ReactDOM.render(React__default.createElement(Root), sdkDiv);
};

const setupSdk = (r, p, status) => {
  initialized = true;
  read = r;
  play = p;
  cameraReady = status;
};
const sdk = {
  bootstrap,
  getSdk: () => {
    if (initialized) {
      return {
        read,
        play,
        cameraReady
      };
    } else {
      throw new Error("SDK is not initialized");
    }
  }
};

exports.default = sdk;
//# sourceMappingURL=sdk.cjs.development.js.map
