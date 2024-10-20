import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

interface UserinputProps {
  handleConfirm: (text: string) => void;
}

const Userinput: React.FC<UserinputProps> = ({ handleConfirm }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View className="justify-center items-center">
      <View onTouchStart={() => setModalVisible(true)}>
        <Image
          className="w-2.5 h-2.5"
          source={require("../../assets/images/map/chat.png")}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View className="flex-1 bg-black/50 justify-center items-center">
            <View className="bg-white p-5 rounded-lg w-4/5">
              <TextInput
                className="h-10 border border-gray-400 mb-5 px-3"
                value={inputValue}
                onChangeText={setInputValue}
                autoFocus
              />
              <Button
                title="Confirm"
                onPress={() => {
                  setInputValue("");
                  setModalVisible(false);
                  handleConfirm(inputValue);
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Userinput;
