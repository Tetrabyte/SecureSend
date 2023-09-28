#!/bin/bash
set -e

export RAILS_ENV=private

echo "Tbyte Secure Send: migrating database to latest..."
bundle exec rake db:migrate

if [ "$PWP_PRECOMPILE" == "true" ]
then
    echo "Tbyte Secure Send: precompiling assets..."
    bundle exec rails assets:precompile
fi

echo "Tbyte Secure Send: starting puma webserver..."
bundle exec puma -C config/puma.rb -e private

exec "$@"
