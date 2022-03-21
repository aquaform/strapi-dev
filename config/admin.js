module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0443a9c10de20a896533958f706cccec'),
  },
});
