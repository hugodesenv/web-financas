import MyInputText from "@/components/text/MyInputText";

interface IProps {

}

const HomeTotalByPurposeFilter = (props: IProps) => {
  return <>
    <div style={{ flex: 'column', width: '100%' }}>
      <MyInputText type="checkbox" title="Considerar apenas lançamentos confirmados" />
    </div>
  </>
}

export default HomeTotalByPurposeFilter;