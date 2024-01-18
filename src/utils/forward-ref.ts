import { forwardRef as baseForwardRef } from 'react';

import { ForwardRefWithInference } from '../types/utils.types';

/**
 * Fixes the inference inside generic components when using forwardRef.
 */
export const forwardRef = baseForwardRef as ForwardRefWithInference;
