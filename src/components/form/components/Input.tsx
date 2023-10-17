import { Control, Controller } from 'react-hook-form';

// COMPONENTS
import { Label } from 'src/components/form/components/Label';

// STYLES

interface InputInterface {
	name: string;
	type: 'any';
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	autoFocus?: boolean;
	control: Control | undefined;
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
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					autoFocus={autoFocus}
					disabled={disabled}
				/>
			</Label>
		)}
	/>
);
