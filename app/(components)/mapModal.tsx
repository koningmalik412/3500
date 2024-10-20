import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import PersonInfo from "./personInfo";
interface ModalComponentProps {
  visible: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  name: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  position,
  onClose,
  name,
}) => (
  <Modal
    transparent={true}
    animationType={"fade"}
    visible={visible}
    onRequestClose={onClose}
  >
    <TouchableWithoutFeedback onPress={onClose}>
      <View className="flex-1 bg-black/50">
        <View
          className="absolute w-48 bg-white rounded-lg"
          style={{ top: position.y, left: position.x / 2 }}
        >
          <PersonInfo
            name={name}
            time="2024-02-30"
            bio="123"
            onClose={onClose}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

const MapModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const showModalAtPosition = (x: number, y: number) => {
    setModalPosition({ x, y });
    setModalVisible(true);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Button
        title="Show Modal at (100, 200)"
        onPress={() => showModalAtPosition(100, 200)}
      />
      <Button
        title="Show Modal at (200, 300)"
        onPress={() => showModalAtPosition(200, 300)}
      />
      <Button
        title="Show Modal at (300, 400)"
        onPress={() => showModalAtPosition(300, 400)}
      />
      <ModalComponent
        visible={modalVisible}
        position={modalPosition}
        name={""}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default ModalComponent;
