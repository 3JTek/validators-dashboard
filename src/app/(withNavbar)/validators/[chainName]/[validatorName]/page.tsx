export default function Page({ params }: { params: { chainName: string; validatorName: string } }) {
  return (
    <div>
      Validator Dashboard: {params.chainName} {params.validatorName}
    </div>
  );
}
