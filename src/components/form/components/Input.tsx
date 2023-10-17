import { Control, Controller } from 'react-hook-form';
import { ComponentProps } from 'react';

// COMPONENTS
import { Label } from 'src/components/form/components/Label';

// STYLES
import 'src/components/form/components/styles.scss';
import clsx from 'clsx';

interface InputInterface {
	autoFocus?: boolean;
	control: Control<any> | undefined;
	disabled?: boolean;
	label?: string;
	name: string;
	placeholder?: string;
	type: ComponentProps<'input'>['type'];
}

export const Input = ({ label, type, placeholder, autoFocus, disabled, name, control }: InputInterface) => (
	<Controller
		name={name}
		control={control}
		render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
			<Label label={label} error={error}>
				<input
					type={type}
					name={name}
					required
					ref={ref}
					value={value || ''}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					autoFocus={autoFocus}
					disabled={disabled}
					className={clsx('input', { 'input--error': !!error })}
				/>
			</Label>
		)}
	/>
);
