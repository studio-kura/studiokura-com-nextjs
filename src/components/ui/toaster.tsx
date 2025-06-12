'use client';

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from '@chakra-ui/react';

export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
});

type ToastRenderData = {
  type?: string;
  title?: string;
  description?: string;
  action?: { label: string };
  closable?: boolean;
};

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster
        // TODO: fix for Chakra UI v3
        // Chakra UI v3 is missing `render` in ToasterProps
        // @ts-expect-error
        render={(toast: ToastRenderData) => (
          <Toast.Root width={{ md: 'sm' }}>
            {toast.type === 'loading' ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      />
    </Portal>
  );
};
