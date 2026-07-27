import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

const AccountDeletion = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, you would send this data to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log({ mobileNumber, reason });
      setSuccessMessage('Your account deletion request has been submitted successfully. We will contact you shortly.');
      setMobileNumber('');
      setReason('');
    } catch (error) {
      console.error('Error submitting account deletion request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
            Account <span className="text-primary">Deletion</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Please provide your mobile number and reason for deleting your account
          </p>
        </div>
        
        <Card className="shadow-lg border border-border bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-foreground">
              Account Deletion Request
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill out the form below to request account deletion
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 py-6">
              {successMessage ? (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-900/30 dark:text-green-300">
                  {successMessage}
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-foreground">
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your registered mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      pattern="^[0-9]{10}$"
                      title="Please enter a valid 10-digit mobile number"
                      className="py-6 px-4 border border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-foreground">
                      Reason for Deletion
                    </Label>
                    <Textarea
                      id="reason"
                      placeholder="Please let us know why you want to delete your account"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                      rows={5}
                      className="py-4 px-4 border border-border focus:border-primary focus:ring-primary min-h-[150px]"
                    />
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              {!successMessage && (
                <Button
                  type="submit"
                  className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Request Account Deletion'}
                </Button>
              )}
              <p className="text-sm text-muted-foreground text-center">
                After submitting, we will verify your identity through SMS and process your request within 24 hours.
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AccountDeletion;