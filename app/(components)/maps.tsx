import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  Text,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import ModalComponent from "../(components)/mapModal";
const { width, height } = Dimensions.get("window");
import { Asset } from "expo-asset";

const preloadAssets = async () => {
  const imageAssets = Object.values(imageMap).map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  // Await all image preloading
  await Promise.all(imageAssets);
};

const imageMap: { [key: string]: any } = {
  threedmap: require("../../assets/images/map/3dmap.jpg"),
  twodmap: require("../../assets/images/map/2dmap.png"),
  eat: require("../../assets/images/map/eat.png"),
  action: require("../../assets/images/map/action.png"),
  run: require("../../assets/images/map/run.png"),
  say: require("../../assets/images/map/say.png"),
  play: require("../../assets/images/map/play.png"),
  study: require("../../assets/images/map/study.png"),
  angry: require("../../assets/images/map/angry.png"),
  fidgety: require("../../assets/images/map/fidgety.png"),
  joyfull: require("../../assets/images/map/joyfull.png"),
  tired: require("../../assets/images/map/tired.png"),
  fight: require("../../assets/images/map/fight.png"),
  frightened: require("../../assets/images/map/frightened.png"),
  high: require("../../assets/images/map/high.png"),
};

const Maps: React.FC = () => {
  const [imageUrls, setImageUrls] = useState([
    {
      imageUrl: imageMap.eat,
      imagePozition: {
        left: 100,
        rigt: 33,
      },
      name: "eat",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.action,
      imagePozition: {
        left: 600,
        rigt: 40,
      },
      name: "action",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.run,
      imagePozition: {
        left: 140,
        rigt: 133,
      },
      name: "run",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.say,
      imagePozition: {
        left: 200,
        rigt: 333,
      },
      name: "say",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.play,
      imagePozition: {
        left: 450,
        rigt: 444,
      },
      name: "play",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.study,
      imagePozition: {
        left: 456,
        rigt: 345,
      },
      name: "study",
      imageRef: useRef(null),
    },
  ]);

  const [dimageUrls, setDimageUrls] = useState([
    {
      imageUrl: imageMap.angry,
      imagePozition: {
        left: 20,
        rigt: 203,
      },
      widths: 20,
      heights: 30,
      name: "angry",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.fidgety,
      imagePozition: {
        left: 10,
        rigt: 230,
      },
      widths: 50,
      heights: 60,
      name: "fidgety",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.joyfull,
      imagePozition: {
        left: 130,
        rigt: 263,
      },
      widths: 90,
      heights: 100,
      name: "joyfull",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.tired,
      imagePozition: {
        left: 250,
        rigt: 223,
      },
      widths: 50,
      heights: 60,
      name: "tired",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.fight,
      imagePozition: {
        left: 270,
        rigt: 253,
      },
      widths: 80,
      heights: 90,
      name: "fight",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.frightened,
      imagePozition: {
        left: 130,
        rigt: 203,
      },
      widths: 30,
      heights: 40,
      name: "frightened",
      imageRef: useRef(null),
    },
    {
      imageUrl: imageMap.high,
      imagePozition: {
        left: 180,
        rigt: 223,
      },
      widths: 60,
      heights: 70,
      name: "high",
      imageRef: useRef(null),
    },
  ]);

  const leftButtonRef = useRef(null);
  const [visiblePopover, setVisiblePopover] = useState(false);
  const [is3d, setIs3D] = useState(false);
  const [pername, setPername] = useState("false");
  const [poppositon, setPoppositon] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);

  const handlePress = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    setPoppositon({ x: pageX, y: pageY + 30 });
    setVisiblePopover(true);
  };

  return (
    <View>
      <View className="flex flex-row justify-around bg-white rounded-full mx-2 mb-3">
        <TouchableOpacity
          className={`py-1 w-1/2 flex items-center ${
            !is3d ? "bg-purple rounded-full" : ""
          }`}
          onPress={() => {
            setIs3D(!is3d);
            setVisiblePopover(false);
          }}
        >
          <Text
            className={`text-sm font-msbold ${
              !is3d ? "text-white" : "text-purple"
            }`}
          >
            2D
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-1 w-1/2 flex items-center ${
            is3d ? "bg-purple rounded-full" : ""
          }`}
          onPress={() => {
            setIs3D(!is3d);
            setVisiblePopover(false);
          }}
        >
          <Text
            className={`text-sm font-msbold ${
              is3d ? "text-white" : "text-purple"
            }`}
          >
            3D
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        directionalLockEnabled
        bounces={true}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        zoomScale={2}
      >
        <View className="items-center justify-center w-full h-full">
          {is3d ? (
            <ScrollView
              directionalLockEnabled
              bounces={true}
              alwaysBounceHorizontal={false}
              alwaysBounceVertical={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              zoomScale={2}
            >
              <View className="items-center justify-center w-[640px]">
                <ImageBackground
                  className="w-[640px] h-[853px]"
                  source={imageMap["threedmap"]}
                >
                  {dimageUrls.map((item, index) => {
                    return (
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={(e) => {
                          setPername(item.name);
                          handlePress(e);
                        }}
                      >
                        <Image
                          tintColor={
                            pername == item.name ? "#ad53ff" : "#51247a"
                          }
                          className="absolute"
                          style={{
                            left: item.imagePozition.left * 2,
                            top: item.imagePozition.rigt * 2,
                            width: item.widths,
                            height: item.heights,
                          }}
                          source={item.imageUrl}
                        />
                      </TouchableWithoutFeedback>
                    );
                  })}
                  <ModalComponent
                    name={pername}
                    visible={visiblePopover}
                    position={poppositon}
                    onClose={() => {
                      setPername("");
                      setVisiblePopover(false);
                    }}
                  />
                </ImageBackground>
              </View>
            </ScrollView>
          ) : (
            <ScrollView
              directionalLockEnabled
              bounces={true}
              alwaysBounceHorizontal={false}
              alwaysBounceVertical={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              zoomScale={2}
            >
              <View className="items-center justify-center w-[1078px]">
                <ImageBackground
                  source={imageMap["twodmap"]}
                  className="relative w-[1078px] h-[928.5px]"
                  resizeMode="cover"
                >
                  {imageUrls.map((item, index) => (
                    <TouchableWithoutFeedback
                      key={index}
                      onPress={(e) => {
                        setPername(item.name);
                        handlePress(e);
                      }}
                    >
                      <Image
                        tintColor={pername == item.name ? "#ad53ff" : "#51247a"}
                        className="absolute"
                        style={{
                          left: item.imagePozition.left,
                          top: item.imagePozition.rigt,
                          width: 50,
                          height: 60,
                        }}
                        source={item.imageUrl}
                      />
                    </TouchableWithoutFeedback>
                  ))}
                  <ModalComponent
                    name={pername}
                    visible={visiblePopover}
                    position={poppositon}
                    onClose={() => {
                      setPername("");
                      setVisiblePopover(false);
                    }}
                  />
                </ImageBackground>
              </View>
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Maps;
