/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Button from '../../button/button';

import cn from '../../cn';
import performance from '../../performance';

/**
 * Компонент тэг.
 *
 * @extends Button
 */
@cn('tag-button')
@performance()
class TagButton extends Button {}

export default TagButton;