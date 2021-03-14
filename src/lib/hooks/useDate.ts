export const useDate = () => {
  const today = new Date(); // today는 Date의 Instance
  const year = String(today.getFullYear());
  // 한 자리 숫자일 경우 앞에 0을 붙여줘 순서대로 데이터가 나올 수 있도록
  const month =
    String(today.getMonth() + 1).length === 1
      ? '0' + String(today.getMonth() + 1)
      : String(today.getMonth() + 1);
  const date =
    String(today.getDate()).length === 1
      ? '0' + String(today.getDate())
      : String(today.getDate());
  const when: string = `${year}${month}${date}`;
  const whenResponse: string = `${year}.${month}.${date}`;

  return { when, whenResponse };
};
