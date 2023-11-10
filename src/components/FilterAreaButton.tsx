import React from "react";
import {
  Button,
  ButtonColorVariant,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitleSize,
  ModalBody,
} from "@channel.io/bezier-react";
import { ChevronSmallDownIcon } from "@channel.io/bezier-icons";
import useFilterStore from "@/store/filterStore";

const FilterAreaButton: React.FC = () => {
  const { area, setArea } = useFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="분야"
          colorVariant={ButtonColorVariant.MonochromeLight}
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="분야" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Button
              text="프론트엔드"
              colorVariant={
                area[0]
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setArea(0)}
            />
            <Button
              text="프론트엔드"
              colorVariant={
                area[1]
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setArea(1)}
            />
            <Button
              text="프론트엔드"
              colorVariant={
                area[2]
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setArea(2)}
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterAreaButton;
