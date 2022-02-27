import { useMemo } from 'react'
import { Form, Select, Input } from 'antd'

interface DynamicFormProps {
    step: number
}

export default function DynamicForm({ step }: DynamicFormProps) {
    const getCurrentSteps = (index: number) =>
        ({
            0: () => (
                <>
                    <Form.Item required>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                </>
            ),
            1: () => (
                <>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                </>
            ),
        }[index])
    const currentForm = useMemo(() => getCurrentSteps(step), [step])
    return <Form layout="vertical">{currentForm}</Form>
}
