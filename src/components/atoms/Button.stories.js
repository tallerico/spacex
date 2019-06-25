import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
// add this line
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf('atoms/Button', module);

// add this line
stories.addDecorator(withKnobs);

// ---- add this block
const variantOptions = {
	none: '',
	primary: 'primary',
	secondary: 'secondary',
};
// ----

stories.add('with knobs', () => (
	<Button
		onClick={action('clicked!')}
		// ---- and this one
		// syntax is (name, options, default)
		variant={select('variant', variantOptions, '')}
		// syntax is (name, default)
		disabled={boolean('disabled', false)}
		// ----
	>
		Button
	</Button>
));
