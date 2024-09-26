const Test = ({
    params,
}: {
    params: { testKey: string };
}) => {
    return (
        <div>
            {params.testKey}
        </div>
    );
};

export default Test;
