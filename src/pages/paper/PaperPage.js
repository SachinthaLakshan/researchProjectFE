import { Container, Stack } from "@mui/material";
import Input from "../../components/Input/input";
import DowpDownSelect from "../../components/select/Select";
import RadioInputGroup from "../../components/radio/radioGroup";
import TextArea from "../../components/textArea/textArea";

function PaperPage() {
    const json_data = {
        type: "stack",
        direction: "column",
        form: [
            {
                type: "radio",
                label: "input label",
                defaultValue: ""
            },
            {
                type: "select",
                label: "input label",
                defaultValue: ""
            },
            {
                type: "input",
                label: "input label",
                defaultValue: ""
            },
            {
                type: "textarea",
                label: "input label",
                defaultValue: ""
            },
            
            {
                type: "stack",
                direction: "row",
                form: [
                    {
                        type: "input",
                        label: "input label",
                        defaultValue: ""
                    },
                    {
                        type: "radio",
                        label: "input label",
                        defaultValue: ""
                    }
                ]
            },
            {
                type: "stack",
                direction: "row",
                form: [
                    {
                        type: "input",
                        label: "input label",
                        defaultValue: ""
                    },
                    {
                        type: "input",
                        label: "input label",
                        defaultValue: ""
                    }
                ]
            }
        ]
    }
    const RenderItem = (type) => {
        switch (type) {
            case "input":
                return <Input />
            case "select":
                return <DowpDownSelect label="this is label" />
            case "radio":
                return <RadioInputGroup />
            case "textarea":
                return <TextArea />


        }
    }

    const renderForm = (data) => {
        console.log(data);
        return (
            <Stack direction={data.direction}>
                {data.form.map((item) => {
                    if (item.type === 'stack') {
                        return renderForm(item);
                    } else {
                        return RenderItem(item.type);
                    }
                })}
            </Stack>
        );
    };

    return (
        <Container maxWidth="sm">
            {renderForm(json_data)}
        </Container>

    );
}

export default PaperPage;