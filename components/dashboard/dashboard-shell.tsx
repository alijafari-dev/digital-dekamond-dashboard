'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { If, Then } from 'react-if';
import { useAuth } from '@/contexts/auth-context';
import { FormButton } from '@/components/ui/form-button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { pageVariants, dashboardVariants } from '@/lib/animation-variants';

export function DashboardShell() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <AnimatePresence mode="wait">
      <If condition={!user}>
        <Then>
          <motion.div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingSpinner size="lg" />
          </motion.div>
        </Then>
      </If>

      <If condition={!!user}>
        <Then>
          <motion.div
            className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="max-w-4xl mx-auto px-6 py-12"
              variants={dashboardVariants.container}
              initial="initial"
              animate="animate"
            >
              {/* Header */}
              <motion.header
                className="mb-16"
                variants={dashboardVariants.item}
              >
                <div className="flex items-start justify-between flex-wrap gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <motion.h1
                      className="text-heading text-4xl font-black text-foreground mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Welcome to your Dashboard
                    </motion.h1>
                    <motion.p
                      className="text-body text-muted-foreground text-lg leading-relaxed max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Your secure workspace is ready. Manage your account and
                      explore your personalized experience.
                    </motion.p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <FormButton
                      variant="secondary"
                      onClick={handleLogout}
                      className="px-6 py-3 rounded-xl font-semibold"
                    >
                      Sign Out
                    </FormButton>
                  </motion.div>
                </div>
              </motion.header>

              <motion.main
                className="space-y-8"
                variants={dashboardVariants.container}
              >
                <motion.div
                  className="bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-8 shadow-xl shadow-primary/5"
                  variants={dashboardVariants.item}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-8">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <motion.img
                          src={user?.picture.large || '/placeholder.svg'}
                          alt={`${user?.name.first} ${user?.name.last}`}
                          className="w-24 h-24 rounded-2xl border-4 border-primary/20 object-cover shadow-lg"
                          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, ease: 'backOut' }}
                        />
                        <motion.div
                          className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary rounded-full border-4 border-card flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.5,
                            ease: 'backOut',
                          }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: 'easeInOut',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.h2
                        className="text-heading text-2xl font-bold text-foreground mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {user?.name.first} {user?.name.last}
                      </motion.h2>
                      <motion.p
                        className="text-body text-muted-foreground text-base leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        Account verified and secure • Last login: Today
                      </motion.p>
                      <motion.div
                        className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-secondary rounded-full"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                          }}
                        />
                        Active Session
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  variants={dashboardVariants.container}
                >
                  <motion.div
                    className="bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 shadow-lg"
                    variants={dashboardVariants.item}
                    whileHover={{
                      y: -3,
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-heading text-xl font-bold text-foreground">
                        Contact Details
                      </h3>
                    </motion.div>
                    <div className="space-y-4">
                      <motion.div
                        className="flex justify-between items-center py-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                      >
                        <span className="text-body text-muted-foreground font-medium">
                          Email Address
                        </span>
                        <span className="text-body text-foreground font-semibold">
                          {user?.email}
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between items-center py-2 border-t border-border/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                      >
                        <span className="text-body text-muted-foreground font-medium">
                          Phone Number
                        </span>
                        <span className="text-body text-foreground font-semibold">
                          {user?.phone}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 shadow-lg"
                    variants={dashboardVariants.item}
                    whileHover={{
                      y: -3,
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-heading text-xl font-bold text-foreground">
                        Location Info
                      </h3>
                    </motion.div>
                    <div className="space-y-4">
                      <motion.div
                        className="flex justify-between items-center py-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                      >
                        <span className="text-body text-muted-foreground font-medium">
                          City
                        </span>
                        <span className="text-body text-foreground font-semibold">
                          {user?.location.city}
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between items-center py-2 border-t border-border/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                      >
                        <span className="text-body text-muted-foreground font-medium">
                          State
                        </span>
                        <span className="text-body text-foreground font-semibold">
                          {user?.location.state}
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between items-center py-2 border-t border-border/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.3 }}
                      >
                        <span className="text-body text-muted-foreground font-medium">
                          Country
                        </span>
                        <span className="text-body text-foreground font-semibold">
                          {user?.location.country}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.main>
            </motion.div>
          </motion.div>
        </Then>
      </If>
    </AnimatePresence>
  );
}
