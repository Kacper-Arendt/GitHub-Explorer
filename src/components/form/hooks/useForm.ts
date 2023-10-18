import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useHookForm, UseFormProps as UseHookFormProps } from 'react-hook-form';
import { ZodSchema, TypeOf } from 'zod';

interface UseFormProps<T extends ZodSchema> extends UseHookFormProps<TypeOf<T>> {
	schema: T;
}

export const useForm = <T extends ZodSchema>({ schema, ...formConfig }: UseFormProps<T>) =>
	useHookForm({
		mode: 'onSubmit',
		...formConfig,
		resolver: zodResolver(schema),
	});
