import { Dispatch, useState } from "react";
import { Button } from "./ToolBar";
import { Modal } from "antd";
import ModalContent from "./ModalContent";
import { useTranslation } from "react-i18next";

type Props = {
  setIsPositionChanged: Dispatch<boolean>;
  isPositionChanged: boolean;
  setIsScrollDisabled: Dispatch<boolean>;
  setTriggerMoving: Dispatch<boolean>;

};

function About({ setIsPositionChanged, setIsScrollDisabled, setTriggerMoving }: Props) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const backHorizontalChangeHandler = () => {
    setIsPositionChanged(false);
    setIsScrollDisabled(false);

    setTriggerMoving(true)

    setTimeout(() => {
      setTriggerMoving(false)
    }, 400);
  };

  return (
    <section className="md:gap-9 flex justify-start flex-col md:flex-row md:p-12">
      <Modal
        title={<h4 className="text-3xl mb-5">{t("ModalTitle")}</h4>}
        open={isModalOpen}
        centered
        footer={null}
        onCancel={toggleModal}
      >
        <ModalContent />
      </Modal>

      <div
        className="max-md:py-8 max-md:px-5 md:mb-6" /* flex-1 max-md:hidden  */
      >
        <Button className="py-2" onClick={backHorizontalChangeHandler}>
          {t("SectionSixBackButton")}
        </Button>
      </div>
      <div className="flex-1">
        {/* <div className="w-full md:hidden">
          <div className="">
            <img
              src={
                i18n.resolvedLanguage == "en"
                  ? "/assets/apply-ai-Mobile-English.png"
                  : "/assets/apply-ai-Mobile-Norwegian.png"
              }
              alt=""
            />
          <div className="h-16 bg-black w-full"></div>
          </div>

        </div> */}

        <div className="max-md:p-6" /* hidden md:block */>
          <div className="mb-4">
            <h2 className="text-xl md:text-3xl xl:text-4xl md:max-w-[70%] font-bold mb-6">
              {t("SectionSixTitle")}
            </h2>
            <p
              className="text-sm md:text-base xl:text-lg"
              dangerouslySetInnerHTML={{ __html: t("SectionSixText") }}
            ></p>
            <p
              className="text-sm md:text-base xl:text-lg my-5"
              dangerouslySetInnerHTML={{ __html: t("SectionSixText2") }}
            ></p>
          </div>
          <div>




            <div className="flex justify-end mt-6 gap-5">
              <Button
                className="py-2 md:hidden"
                onClick={backHorizontalChangeHandler}
              >
                {t("SectionSixBackButton")}
              </Button>
              <Button onClick={toggleModal} className="py-2">
                {t("SectionSixButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
