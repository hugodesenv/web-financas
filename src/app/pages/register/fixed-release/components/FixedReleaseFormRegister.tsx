"use client";

import MyCard from "@/components/card/MyCard";
import LayoutButtonsRegister, {
  OptionType,
} from "@/components/layout/layout_buttons_register";
import MyRadioGroup from "@/components/radioGroup/MyRadioGroup";
import { MyTabView } from "@/components/tabview/MyTabView";
import MyInputText from "@/components/text/MyInputText";
import { CSSProperties, useState } from "react";
import { useForm } from "react-hook-form";

const style = {
  main: { display: "flex", flexDirection: "column", gap: 10 } as CSSProperties,
};

export default function FixedReleaseFormRegister() {
  const { handleSubmit, register, setValue } = useForm();
  const [loadTest, setLoadTest] = useState(false);

  async function onSubmit(data: any) {
    setLoadTest(true);
    try {
      setTimeout(() => {
        setLoadTest(false);
      }, 3000);
    } finally {
    }
  }

  function SearchTab() {
    return <>Tela de consulta aqui</>;
  }

  function handleChangeType(typeSelect: string) {
    setValue("type", typeSelect);
  }

  function RegisterTab() {
    return (
      <form
        name="fixed_release_register"
        onSubmit={handleSubmit(onSubmit)}
        style={style.main}
      >
        <MyInputText title="Descrição" autoFocus {...register("description")} />
        <MyInputText
          title="Data de previsão"
          type="date"
          {...register("expected_date")}
        />
        <MyCard>
          <MyRadioGroup
            name="type"
            title="Qual é o tipo?"
            attributes={[
              {
                label: "Receita",
                value: "revenue",
                defaultChecked: true,
              },
              { label: "Despesa", value: "expense" },
            ]}
            onChange={handleChangeType}
          />
        </MyCard>
        <LayoutButtonsRegister
          formName="fixed_release_register"
          typesAccept={[OptionType.SAVE, OptionType.DELETE, OptionType.CANCEL]}
        />
      </form>
    );
  }

  return (
    <MyTabView titles={["Consulta", "Digitação"]}>
      <SearchTab />
      <RegisterTab />
    </MyTabView>
  );
}
