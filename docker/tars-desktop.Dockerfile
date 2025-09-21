# Extend the pre-built tars-desktop image
FROM ghcr.io/tars-ai/tars-desktop:edge

# Add additional packages, applications, or customizations here

# Expose the tarsd service port
EXPOSE 9990

# Start the tarsd service
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf", "-n"]
