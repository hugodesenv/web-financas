"use client";

import MyCard from "@/components/card/my-card/MyCardBox";
import { MyForm } from "@/components/form/MyForm";
import MyRadioGroup from "@/components/radioGroup/MyRadioGroup";
import { MyTabView } from "@/components/tabview/MyTabView";
import MyInputText from "@/components/text/MyInputText";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
      <MyForm name="fixed_release_register" onSubmit={handleSubmit(onSubmit)}>
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
      </MyForm>
    );
  }

  return (
    <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
      <SearchTab />
      <RegisterTab />
    </MyTabView>
  );
}
