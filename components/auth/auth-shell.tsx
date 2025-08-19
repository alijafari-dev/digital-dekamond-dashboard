'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { If, Then, Else, When } from 'react-if';
import { useAuth } from '@/contexts/auth-context';
import { useGuestRedirect } from '@/hooks/use-auth-redirect';
import { loginSchema, type LoginFormData } from '@/lib/validation';
import { AppRoutes } from '@/lib/routes';
import { FormInput } from '@/components/ui/form-input';
import { FormButton } from '@/components/ui/form-button';
import {
  pageVariants,
  cardVariants,
  inputVariants,
  buttonVariants,
  validationVariants,
  errorVariants,
} from '@/lib/animation-variants';

export function AuthShell() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  useGuestRedirect();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const phoneValue = watch('phoneNumber');
  const isPhoneValid = phoneValue && /^09\d{9}$/.test(phoneValue);

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await login(data.phoneNumber);
      router.push(AppRoutes.DASHBOARD);
    } catch (error) {
      setSubmitError(
        'Authentication failed. Please verify your phone number and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background px-4 py-8"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full max-w-sm">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="w-8 h-8 bg-primary rounded-lg"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(var(--primary), 0.4)',
                  '0 0 0 10px rgba(var(--primary), 0)',
                  '0 0 0 0 rgba(var(--primary), 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          <motion.h1
            className="text-heading text-3xl font-black text-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Welcome
          </motion.h1>
          <motion.p
            className="text-body text-muted-foreground text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Enter your mobile number to access your dashboard
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl shadow-primary/5"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              className="relative"
              variants={inputVariants}
              initial="initial"
              animate="animate"
            >
              <FormInput
                {...register('phoneNumber')}
                id="phoneNumber"
                type="tel"
                label="Mobile Number"
                placeholder="09123456789"
                error={errors.phoneNumber?.message}
                disabled={isSubmitting}
                className="text-lg py-4"
              />
              <If condition={!!phoneValue}>
                <Then>
                  <div className="absolute right-3 top-11 flex items-center">
                    <When condition={!!isPhoneValid}>
                      <motion.div
                        className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center"
                        variants={validationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="success"
                      >
                        <motion.svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      </motion.div>
                    </When>
                    <When condition={!isPhoneValid}>
                      <motion.div
                        className="w-5 h-5 bg-muted rounded-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      </motion.div>
                    </When>
                  </div>
                </Then>
              </If>
            </motion.div>

            <AnimatePresence mode="wait">
              <If condition={!!submitError}>
                <Then>
                  <motion.div
                    className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-xl text-sm font-medium"
                    role="alert"
                    variants={errorVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="error"
                  >
                    {submitError}
                  </motion.div>
                </Then>
              </If>
            </AnimatePresence>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="animate"
            >
              <FormButton
                type="submit"
                variant="primary"
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                className="w-full py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                <If condition={isSubmitting}>
                  <Then>Authenticating...</Then>
                  <Else>Continue</Else>
                </If>
              </FormButton>
            </motion.div>
          </form>

          <motion.div
            className="mt-6 pt-6 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Secure authentication • Mobile numbers only
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
